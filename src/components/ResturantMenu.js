import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_MENU } from "../util/constants";
import { IMAGE_LINK } from "../util/constants";


const ResturantMenu = () =>{
    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams();


    useEffect(() =>{
        featchdata();
    },[]);
    const featchdata = async () =>{
        const data = await fetch(REST_MENU +resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer />

    const {name, costForTwoMessage ,cuisines,avgRating,totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);

    return (
        <div className="rest_menu">
            <h1>{name} </h1>
            <div className="rest_rating">
                <div className="rest_rating_info">
                    <h5>{avgRating}({totalRatingsString}) . {costForTwoMessage}</h5>
                    <p>{cuisines.join(", ")}</p>
                </div>
            </div>
            <div className="recommended">
                    {itemCards.map((item) => (
                        <div className="main_div" key={item.card.info.id}>
                            <div className="resto_content">
                                <h4>{item.card.info.name}</h4>
                                <p>₹{item?.card?.info?.price/100 || item?.card?.info.defaultPrice /100}</p> 
                                {item?.card?.info?.ratings?.aggregatedRating && Object.keys(item?.card?.info?.ratings?.aggregatedRating) .length > 0 && (
                                     <p className="rating">★{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                                )}
                                <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="resto_image">
                                <img className="resturant_image" src={IMAGE_LINK + item?.card?.info?.imageId} alt=""/>
                            </div>
                        </div>
                    ))}
                    {itemCards.map((item) => (<li  key={item.card.info.id}>{item.card.info.name}</li>))}
            </div>
            
        </div>
    )
}
export default ResturantMenu;