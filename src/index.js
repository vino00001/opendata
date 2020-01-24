import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


import{OpendataHeader} from "./OpendataHeader";
import{OpendataFooter} from "./OpendataFooter";
import{OpendataFilter} from "./OpendataFilter";
import{OpendataContent} from "./OpendataContent";
import{OpendataNavigator} from "./OpendataNavigator";


export function Opendata(props){
    return <div className="Content">
        <header><OpendataHeader setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn} username={props.username} navigate={props.navigate}/></header>
        <div><OpendataFilter/></div>
        <div><OpendataContent/></div>
        <footer><OpendataFooter/></footer>        
        </div>
}
ReactDOM.render(<OpendataNavigator />, document.getElementById('root'));


