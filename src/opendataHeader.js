import React from 'react';
import './index.scss';

export function OpendataHeader(props){
    return <div className="Header">
                <label className="uname" htmlFor="username"><b>Username</b></label>
                <input type="text" id="username"></input>
                <label className="psw" htmlFor="password"><b>Password</b></label>
                <input type="password" id="password"></input>
                <button>Login</button>
            </div>
}