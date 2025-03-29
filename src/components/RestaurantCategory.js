import { useState } from "react";
import RestaurantList from "./RestaurantList";

const RestaurantCategory = ({data ,showItems , setShowIndex}) =>{
    const HandleClick = () =>{
        setShowIndex();
    }
    return(
            <div className="bg-gray-100 w-200 m-auto p-2 my-4 shadow-gray-600">
                <div className="flex justify-between px-8 my-4 cursor-pointer" onClick={HandleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
               { showItems && <RestaurantList key={data.title} itemlist ={data.itemCards}/>}
            </div>
    )
}
export default RestaurantCategory; 