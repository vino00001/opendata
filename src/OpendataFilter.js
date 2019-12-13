import React from 'react';
import './index.scss';

export function OpendataFilter(props){

    function Check(){
        document.getElementById("restaurant1").checked = true;
    }    
             
    

    return <div className ="Sidebar">
       <a onClick = {Check}><input type="checkbox" id="restaurant1"></input> Amerikanskt</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant2"></input> Kinesiskt</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant3"></input> Thai</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant4"></input> Asiatiskt</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant5"></input> Pizza</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant6"></input> Vegitariskt</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant7"></input> Hamburgare</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant8"></input> Sallad</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant9"></input> Kebab</a>
       <a onClick = {Check}><input type="checkbox" id="restaurant10"></input> Sushi</a>
    </div>

    
}