import { useDispatch, useSelector } from "react-redux";
import RestaurantList from "./RestaurantList";
import { clearCart } from "../util/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    const dispatch = useDispatch();
    const handleClearCart  = () => {
        dispatch(clearCart());
    }
    return(
        <div className="p-2 m-2 text-center ">
            <h1 font-bold text-xl>Cart</h1>
            <div className=" w-200 m-auto p-2 my-4 shadow-gray-600 ">
               {cartItems.length !=0 && <button className="bg-black text-white rounded-lg p-2 cursor-pointer" onClick={handleClearCart}> Clear cart</button>}

                {cartItems.length == 0  && <h1>Your Cart is empty !</h1>}
                <RestaurantList itemlist ={cartItems}/>
            </div>
        </div>
    )
 } 
 export default Cart;