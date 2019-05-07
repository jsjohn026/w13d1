import React from 'react';
import ReactDOM from 'react-dom';


import Clock from './clock';
import Tabs from './tabs';

const Root = () => (
     <div> 
       <Clock />
       <Tabs />

     </div>);



document.addEventListener("DOMContentLoaded", ()=>{

   ReactDOM.render(<Root />, document.getElementById("main"));  
});