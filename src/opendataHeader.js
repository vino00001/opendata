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
<<<<<<< HEAD
                <button className = "MapBtn button is-small button is-success" onClick={gotoMap}>Map</button>
                {props.isLoggedIn && <div id="header-logout-content"><p>Welcome, {props.username}</p><button className="button is-small button is-info" onClick={logoutHandler} >Logout</button></div> }
=======
                {props.username && <p>Welcome, {props.username}</p>}
            
                <button className = "MapBtn button is-medium button is-success" onClick={gotoMap}>Map</button>
>>>>>>> bebedb0fefba6fdb111677817afd030f59bac396
            </div>
}