import React from "react";

import "./MapTemplate.css";

import {createMap, resetOverlay} from "./MapMap";

export function MapTemplate(props){

    React.useEffect(() => {createMap()});

    function closePopup() {
        resetOverlay();
    }

    return(
        <div id="map-container">
            <div id="map"></div>
            <div id="popup">
                <a href="#" id="popup-closer" onClick={closePopup} >X</a>
                <div id="popup-content"></div>
            </div>
        </div>
        
    )
}