import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import BodyComponent from "./Body";
import About from "./About";
import Contact from "./Contact";
import Errorpage from "./Errorpage";
import RestaurantMenu from "./RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContext from "../util/UserContext";
import { Provider } from "react-redux";
import appStore from "../util/appStore";
import Cart from "./Cart"


const styleCrad = {
    backgroundColor : "#f0f0f0"
}
 /*<div className="rest_container" style={styleCrad}> */ 
 //the above dv also same thing synatx is different
 



const AppComponent = () => {

    // dynamic way to access the user names
    const[username, setUserName] = useState('');
    useEffect(() => {
        const data ={
            "name" : "Sunita Patil"
        }
        setUserName(data.name);
    })


    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedinUser : username, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const AppRouter = createBrowserRouter([
    {
        path :"/",
        element : <AppComponent />,
        children :[
            {
                path :'/',
                element :<BodyComponent />
            },
            {
                path:"/about",
                element : <About />,
            },
            {
                path:"/contact",
                element : <Contact />,
            },
            {
                path: '/resturants/:resId',
                element :<RestaurantMenu />
            },
            {
                path: '/cart',
                element :<Cart />
            }
        ],
        errorElement :<Errorpage />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={AppRouter}/>)
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<AppComponent/>}  errorElement= {<Errorpage />}></Route>
//             <Route path="/about" element ={<About />}></Route>
//             <Route path="/contact" element ={<Contact />}></Route>
//         </Routes>
//     </BrowserRouter>
// )