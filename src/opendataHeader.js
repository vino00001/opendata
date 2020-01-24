import React from 'react';
import './index.scss';

export function OpendataHeader(props){

    function gotoMap(){
        props.navigate("MapTemplate");
    }

    function logoutHandler() {
        props.setIsLoggedIn(false);
        props.navigate("OpendataStart");
    }

    return <div className="Header">
                <button className = "MapBtn button is-small button is-success" onClick={gotoMap}>Map</button>
                {props.isLoggedIn && <div id="header-logout-content"><p>Welcome, {props.username}</p><button className="button is-small button is-info" onClick={logoutHandler} >Logout</button></div> }
            </div>
}