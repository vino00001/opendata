import React from 'react';
import './index.scss';

export function OpendataHeader(props){

    function gotoMap(){
        props.navigate("MapTemplate");
      }

    return <div className="Header">
                <label className="uname" htmlFor="username"><b>Username</b></label>
                <input type="text" id="username"></input>
                <label className="psw" htmlFor="password"><b>Password</b></label>
                <input type="password" id="password"></input>
                <button className = "loginbtn">Login</button>
                <button className = "MapBtn button is-small button is-success" onClick={gotoMap}>Map</button>
            </div>
}