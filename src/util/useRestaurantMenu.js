import { useEffect, useState } from "react";
import { REST_MENU } from "./constants";

const useRestaurantMenu  = ((resId) =>{
    const [resInfo , setResInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    },[])
    const fetchData = async () =>{
        const data = await fetch(REST_MENU + resId);
        const json = await data.json();
        setResInfo(json.data)
        console.log(json.data)
    }
    return resInfo;
})
export default useRestaurantMenu;