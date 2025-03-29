import { useEffect, useState ,useContext} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const[btnnNameReact , setBtnNameReact] = useState('Login');
    const {loggedinUser } = useContext(UserContext);
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
    //subscribing tot he store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const onlineStatus = useOnlineStatus();
    return (
        <div className="bg-red-50 flex items-center justify-between">
            <div className="w-34">
                <img className="" src="https://www.clipartmax.com/png/small/124-1240748_vector-bergar-food-logo-download-fast-food.png"/>
            </div>
            <div className="">
                <ul className="flex gap-4 m-4">
                    <li>online status : {onlineStatus ? '✅': '🔴'}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    {/* <li><a href="/">About Us</a></li> */}
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/cart'}>Cart ({cartItems.length})</Link></li>
                    <button className="" onClick={() =>{
                        // setBtnNameReact('Logout'); // on click of login it is changing to logout using state variable
                        // toggle function
                        return btnnNameReact == 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                    }}>{btnnNameReact}</button>
                    <li>{loggedinUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header