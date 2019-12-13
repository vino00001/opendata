import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


import{OpendataHeader} from "./OpendataHeader";
import{OpendataFooter} from "./OpendataFooter";
import{OpendataFilter} from "./OpendataFilter";



function Opendata(){
    return <div className="Content">
        <header><OpendataHeader/></header>
        <div><OpendataFilter/></div>
        <footer><OpendataFooter/></footer>        
        </div>
}
ReactDOM.render(<Opendata />, document.getElementById('root'));


