import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bulma/css/bulma.css";

import{OpendataHeader} from "./opendataHeader";



function Opendata(){
    return <header><OpendataHeader/></header>
}
ReactDOM.render(<Opendata />, document.getElementById('root'));


