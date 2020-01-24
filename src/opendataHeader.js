import React from 'react';
import './index.scss';

export function OpendataHeader(props){

    function gotoMap(){
        props.navigate("MapTemplate");
      }

    return <div className="Header">
                {props.username && <p>Welcome, {props.username}</p>}
            
                <button className = "MapBtn button is-small button is-success" onClick={gotoMap}>Map</button>
            </div>
}