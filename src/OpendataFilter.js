import React from 'react';
import './index.scss';

export function OpendataFilter(props){

    function Check1(){
        if(document.getElementById("AmerikanskBox").checked === false){
            document.getElementById("AmerikanskBox").checked = true;
        }else{
            document.getElementById("AmerikanskBox").checked = false;
        }
    }    
    function Check2(){
        if(document.getElementById("KinesiskBox").checked === false){
            document.getElementById("KinesiskBox").checked = true;
        }else{
            document.getElementById("KinesiskBox").checked = false;
        }
    }   
    function Check3(){
        if(document.getElementById("ThaiBox").checked === false){
            document.getElementById("ThaiBox").checked = true;
        }else{
            document.getElementById("ThaiBox").checked = false;
        }
    }   
    function Check4(){
        if(document.getElementById("AsiatiskBox").checked === false){
            document.getElementById("AsiatiskBox").checked = true;
        }else{
            document.getElementById("AsiatiskBox").checked = false;
        }
    }   
    function Check5(){
        if(document.getElementById("PizzaBox").checked === false){
            document.getElementById("PizzaBox").checked = true;
        }else{
            document.getElementById("PizzaBox").checked = false;
        }
    }   
    function Check6(){
        if(document.getElementById("VegitariskBox").checked === false){
            document.getElementById("VegitariskBox").checked = true;
        }else{
            document.getElementById("VegitariskBox").checked = false;
        }
    }   
    function Check7(){
        if(document.getElementById("HamburgareBox").checked === false){
            document.getElementById("HamburgareBox").checked = true;
        }else{
            document.getElementById("HamburgareBox").checked = false;
        }
    }
    function Check8(){
        if(document.getElementById("SalladBox").checked === false){
            document.getElementById("SalladBox").checked = true;
        }else{
            document.getElementById("SalladBox").checked = false;
        }
    }   
    function Check9(){
        if(document.getElementById("KebabBox").checked === false){
            document.getElementById("KebabBox").checked = true;
        }else{
            document.getElementById("KebabBox").checked = false;
        }
    }   
    function Check10(){ 
        if(document.getElementById("SushiBox").checked === false){
            document.getElementById("SushiBox").checked = true;
        }else{
            document.getElementById("SushiBox").checked = false;
        }
    }   
             
    

    return <div className ="Sidebar">
       <a href onClick = {Check1}><input type="checkbox" id="AmerikanskBox"></input> Amerikanskt</a>
       <a href onClick = {Check2}><input type="checkbox" id="KinesiskBox"></input> Kinesiskt</a>
       <a href onClick = {Check3}><input type="checkbox" id="ThaiBox"></input> Thai</a>
       <a href onClick = {Check4}><input type="checkbox" id="AsiatiskBox"></input> Asiatiskt</a>
       <a href onClick = {Check5}><input type="checkbox" id="PizzaBox"></input> Pizza</a>
       <a href onClick = {Check6}><input type="checkbox" id="VegitariskBox"></input> Vegitariskt</a>
       <a href onClick = {Check7}><input type="checkbox" id="HamburgareBox"></input> Hamburgare</a>
       <a href onClick = {Check8}><input type="checkbox" id="SalladBox"></input> Sallad</a>
       <a href onClick = {Check9}><input type="checkbox" id="KebabBox"></input> Kebab</a>
       <a href onClick = {Check10}><input type="checkbox" id="SushiBox"></input> Sushi</a>
    </div>
    
    
}