import React from 'react';
import './index.scss';

export function OpendataFilter(props){

    return <div className ="Sidebar">
       <a><input type="checkbox" name="restaurant1"></input> American</a>
       <a><input type="checkbox" name="restaurant2"></input> Kinesiskt</a>
       <a><input type="checkbox" name="restaurant3"></input> Thai</a>
       <a><input type="checkbox" name="restaurant4"></input> Asiatiskt</a>
       <a><input type="checkbox" name="restaurant5"></input> Pizza</a>
       <a><input type="checkbox" name="restaurant6"></input> Vegitariskt</a>
       <a><input type="checkbox" name="restaurant7"></input> Hamburgare</a>
       <a><input type="checkbox" name="restaurant8"></input> Sallad</a>
       <a><input type="checkbox" name="restaurant9"></input> Kebab</a>
       <a><input type="checkbox" name="restaurant10"></input> Sushi</a>
        
    </div>
}