import { useEffect, useState } from "react";
import { RESTO_LINK } from "./constants";

const useRestaurantList = () =>{
    const [restaurantlist ,setRestaurantList] = useState(null);
    useEffect(()=>{
        fetchdata();
    })
    const fetchdata = async () =>{
        const data = await fetch(RESTO_LINK);
        const json = await data.json();
        console.log(json);
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    return restaurantlist;
}
export default useRestaurantList;