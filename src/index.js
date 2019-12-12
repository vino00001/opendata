import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "../node_modules/bulma/css/bulma.css";

import{OpendataHeader} from "./OpendataHeader";
import{OpendataFooter} from "./OpendataFooter";



function Opendata(){
    return <div className="Content">
        <header><OpendataHeader/></header>
        <footer><OpendataFooter/></footer>
        
        </div>
}
ReactDOM.render(<Opendata />, document.getElementById('root'));


