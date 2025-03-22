
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMAGE_LINK } from "../util/constants";
import useRestaurantMenu from "../util/useRestaurantMenu";
import useOnlineStatus from "../util/useOnlineStatus";


const RestaurantMenu = () =>{

    // const [resInfo , setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);
    // const onlineStatus = useOnlineStatus();

    // useEffect(() =>{
    //     featchdata();
    // },[]);
    // const featchdata = async () =>{
    //     const data = await fetch(REST_MENU +resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }
    if(resInfo === null) return <Shimmer />

    const {name, costForTwoMessage ,cuisines,avgRating,totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);

    

    return (
        <div className="bg-gray-300 pl-56">
            <h1 className="font-extrabold font-serif text-2xl pt-4 ">{name} </h1>
            <div className="">
                <div className="pb-4 ">
                    <h5 className="text-xs">{avgRating}({totalRatingsString}) . {costForTwoMessage}</h5>
                    <p className="text-xs">{cuisines.join(", ")}</p>
                </div>
            </div>
            <div className="max-w-200">
                    {itemCards.map((item) => (
                        <div className="flex border-t-2 pt-4 pb-4" key={item.card.info.id}>
                            <div className="">
                                <h4 className="font-bold">{item.card.info.name}</h4>
                                <p>₹{item?.card?.info?.price/100 || item?.card?.info.defaultPrice /100}</p> 
                                {item?.card?.info?.ratings?.aggregatedRating && Object.keys(item?.card?.info?.ratings?.aggregatedRating) .length > 0 && (
                                     <p className="">★{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                                )}
                                <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="">
                                <img className="w-20 h-20 rounded-md" src={IMAGE_LINK + item?.card?.info?.imageId} alt=""/>
                            </div>
                        </div>
                    ))}
                    {/* {itemCards.map((item) => (<li  key={item.card.info.id}>{item.card.info.name}</li>))} */}
            </div>
            
        </div>
    )
}
export default RestaurantMenu;