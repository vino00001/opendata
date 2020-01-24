import React from 'react';
import './index.scss';

export function OpendataHeader(props){
    return <div className="Header">
                {props.username && <p>Welcome, {props.username}</p>}
            </div>
}