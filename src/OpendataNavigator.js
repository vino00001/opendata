import React from "react";
import {OpendataStart} from "./OpendataStart";
import {MapTemplate} from "./map/MapTemplate";
import {Opendata} from "./index";

export function OpendataNavigator(){
    const [currentpage, setcurrentpage] = React.useState("OpendataStart");
    if(currentpage === "OpendataStart"){
        return <OpendataStart navigate= {setcurrentpage}/>
    }
    if(currentpage === "Opendata"){
        return <Opendata navigate = {setcurrentpage}/>
    }
    if(currentpage ==="MapTemplate"){
        return <MapTemplate navigate ={setcurrentpage}/>
    }
}