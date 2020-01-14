import React from "react";
import {
    Feature, Point,
    Map, View, ol
} from "react-openlayers";
import {fromLonLat} from "react-openlayers";

export function ShowcaseMap(props){
    const coordinatesArray = [
        {
            latitude: 56.879072,
            longitude: 14.802844
        },
        {
            latitude: 56.873242,
            longitude: 14.819412
        },
        {
            latitude: 56.8858,
            longitude: 14.80342
        },
        {
            latitude: 56.87923,
            longitude: 14.81052
        },
        {
            latitude: 56.8782118,
            longitude: 14.8130322
        },
        {
            latitude: 56.87783,
            longitude: 14.80822
        },
        {
            latitude: 56.87908,
            longitude: 14.80284
        },
        {
            latitude: 56.87707,
            longitude: 14.8089
        },
        {
            latitude: 56.878721,
            longitude: 14.828601
        },
        {
            latitude: 56.8772818,
            longitude: 14.8067749
        },
        {
            latitude: 56.87811,
            longitude: 14.80387
        },
        {
            latitude: 56.8800237,
            longitude: 14.799304
        },
        {
            latitude: 56.87907,
            longitude: 14.79994
        },
        {
            latitude: 56.876684,
            longitude: 14.82539
        },
        {
            latitude: 56.87879,
            longitude: 14.79937
        },
        {
            latitude: 56.90157,
            longitude: 14.8284
        },
        {
            latitude: 56.87325,
            longitude: 14.81941
        },
        {
            latitude: 56.875051,
            longitude: 14.797703
        },
        {
            latitude: 56.87893,
            longitude: 14.78859
        },
        {
            latitude: 56.902825,
            longitude: 14.798132
        },
        {
            latitude: 56.890904,
            longitude: 14.78185
        },
        {
            latitude: 56.88287,
            longitude: 14.78
        },
        {
            latitude: 56.88337,
            longitude: 14.778987
        },
        {
            latitude: 56.87407,
            longitude: 14.78684
        },
        {
            latitude: 56.88008,
            longitude: 14.77585
        },
        {
            latitude: 56.8779,
            longitude: 14.7747
        },
        {
            latitude: 56.88483,
            longitude: 14.76517
        },
        {
            latitude: 56.85978,
            longitude: 14.81972
        },
        {
            latitude: 56.88245,
            longitude: 14.76407
        },
        {
            latitude: 56.87861,
            longitude: 14.76563
        },
        {
            latitude: 56.665768,
            longitude: 16.35555
        },
        {
            latitude: 56.66305839,
            longitude: 16.36194448
        },
        {
            latitude: 56.66529,
            longitude: 16.35267
        },
        {
            latitude: 56.6652912,
            longitude: 16.3526619
        },
        {
            latitude: 56.66373,
            longitude: 16.36232
        },
        {
            latitude: 56.66739465,
            longitude: 16.35492627
        },
        {
            latitude: 56.6636,
            longitude: 16.36431
        },
        {
            latitude: 56.66747,
            longitude: 16.35464
        },
        {
            latitude: 56.66113244,
            longitude: 16.36506976
        },
        {
            latitude: 56.662085,
            longitude: 16.347301
        },
        {
            latitude: 56.660679,
            longitude: 16.338622
        },
        {
            latitude: 56.66542,
            longitude: 16.32957
        },
        {
            latitude: 56.674445,
            longitude: 16.334024
        },
        {
            latitude: 56.65999,
            longitude: 16.32347
        },
        {
            latitude: 56.68358,
            longitude: 16.32245
        }
    ]

    const geoMarkerArray = coordinatesArray.map((coordinates, index) => {
        return <Feature type="geomarker"
                geometry={<Point />}
                id={index}
                coordinates={coordinates} />
    });

    console.log(geoMarkerArray);

    return(
        <Map view={{center:[0,0], zoom: 14}}></Map>
    )
}