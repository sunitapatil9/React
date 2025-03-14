import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import BodyComponent from "./Body";

const styleCrad = {
    backgroundColor : "#f0f0f0"
}
 /*<div className="rest_container" style={styleCrad}> */ 
 //the above dv also same thing synatx is different
 



const AppComponent = () => {
    return(
        <div className="app">
            <Header/>
            <BodyComponent/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />)