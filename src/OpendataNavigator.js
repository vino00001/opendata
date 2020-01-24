import React from "react";
import {OpendataStart} from "./OpendataStart";
import {MapTemplate} from "./map/MapTemplate";
import {Opendata} from "./index";

export function OpendataNavigator(){
    const [currentpage, setcurrentpage] = React.useState("OpendataStart");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");

    if(currentpage === "OpendataStart"){
        return <OpendataStart navigate= {setcurrentpage} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
    }
    if(currentpage === "Opendata"){
        return <Opendata navigate = {setcurrentpage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
    }
    if(currentpage ==="MapTemplate"){
        return <MapTemplate navigate ={setcurrentpage}/>
    }
}