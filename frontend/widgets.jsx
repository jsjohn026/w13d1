import React from 'react';
import ReactDOM from 'react-dom';


import Clock from './clock';

const Root = () => (
     <div> 
       <Clock />
     </div>);



document.addEventListener("DOMContentLoaded", ()=>{

   ReactDOM.render(<Root />, document.getElementById("main"));  
});