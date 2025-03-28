import { useState } from "react";
import RestaurantList from "./RestaurantList";

const RestaurantCategory = (data) =>{
    const [itemshow, setItemShow] = useState(false);
    // console.log(data.data.itemCards);
    const HandleClick = () =>{
        console.log("clicked");
        setItemShow(!itemshow);
    }
    return(
        <div>
            <div className="bg-gray-100 w-200 m-auto p-2 my-4 shadow-gray-600">
                <div className="flex justify-between px-8 my-4 cursor-pointer" onClick={HandleClick}>
                    <span>{data.data.title}</span>
                    <span>⬇️</span>
                </div>
               { itemshow && data.data.itemCards.map((list) => (<RestaurantList key={list?.card?.info?.id} itemlist ={list}/>))}
            </div>
        </div>
    )
}
export default RestaurantCategory; 