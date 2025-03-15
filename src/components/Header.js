import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Header = () => {
    const[btnnNameReact , setBtnNameReact] = useState('Login');
    //if usereffect is not having dependency array - it will every time when component renders
    // useEffect(() =>{
    //     console.log("useffect created")
    // })
    //if useeffect is empty dependency array : [] then useeffect will called initial component render (just once);
    // useEffect(() =>{
    //     console.log("useeffet created")
    // },[]);
    //if usereffect is not empty array suppose it has [btnnNameReact] : useeffect called every btnnNameReact updated.
    // useEffect(() =>{
    //     console.log("useeffect created")
    // },[btnnNameReact])

    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="logo" src="https://www.clipartmax.com/png/small/124-1240748_vector-bergar-food-logo-download-fast-food.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    {/* <li><a href="/">About Us</a></li> */}
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                        // setBtnNameReact('Logout'); // on click of login it is changing to logout using state variable
                        // toggle function
                        return btnnNameReact == 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                    }}>{btnnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header