// adding  multiple parent child div Element
/*
<div id="child">
    <div>
        <h1>Hello From child</h1>
    </div>
</div>
<div id="child2">
    <h1>Hello From child</h1>
</div>
*/
const node = React.createElement(
    "div", 
    {id : "parent"},
    [React.createElement("div", {id:"child"}, 
    [ React.createElement("h1",{},"Hello From child one"),
    React.createElement("h2", {}, "second child element ")]),
    React.createElement("div", {id:"child2"}, 
    [ React.createElement("h1",{},"Hello From child one"),
    React.createElement("h2", {}, "second child element ")])]
);


// signle div element

// const node = React.createElement("h1", {
//     id : "heading"
// }, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(node);