import {GetCoordinates} from "../services/MapService";

import Feature from "ol/Feature";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import VectorSource from "ol/source/Vector";
import {fromLonLat} from "ol/proj"
import VectorLayer from "ol/layer/Vector";
import { Map, View } from "ol";
import Projection from "ol/proj/Projection";

import markerIcon from "./images/marker-icon-red-test.png";

import "ol/ol.css";

let coordinatesArray = undefined;
let geoMarkerArray = undefined;
let markerLayer = undefined;

async function getCoordinatesArray(){
    coordinatesArray = await GetCoordinates();
}


export async function getMarkersArray() {
    await getCoordinatesArray();
    console.log(coordinatesArray);
    geoMarkerArray = await coordinatesArray.map((coordinates, index) => {
        return new Feature({
            type: "geoMarker",
            geometry: new Point(fromLonLat([coordinates.longitude, coordinates.latitude])),
            id: index,
            coordinates: coordinates
        })
    });
    console.log(geoMarkerArray);
    markerLayer = new VectorLayer({
            source: new VectorSource({
                features: geoMarkerArray
            }),
            style: styles.geoMarker
        })
    await addMarkerLayer();
}


const styles = {
    "geoMarker": new Style({
        image: new Icon({
            src: "marker-icon-red-test.png"
        })
    })
};

let map = undefined;
let overlay = undefined;

export function createMap(){

    const container = document.getElementById("popup");

    overlay = new Overlay({
        element: container
    });

    map = new Map({
        target: "map",
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        overlays: [overlay],
        view: new View({
            center: fromLonLat([14.808560, 56.888325]),
            zoom: 14
        })
    });

    map.on("click", e => {  //when a specific marker is pressed
        map.forEachFeatureAtPixel(e.pixel, feature => {
            document.getElementById("popup-content").innerHTML = `<p>You clicked on ${feature.values_.coordinates.name}`;  //display message
            const coordinates = fromLonLat([feature.values_.coordinates.longitude, feature.values_.coordinates.latitude]);  //converts lonlat to coordinates
            overlay.setPosition(coordinates);
        })
    })
    return map;
}

export function addMarkerLayer() {
    map.addLayer(markerLayer)
}

export function resetOverlay() {
    overlay.setPosition(undefined);
}

export default map;