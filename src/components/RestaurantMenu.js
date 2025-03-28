
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMAGE_LINK } from "../util/constants";
import useRestaurantMenu from "../util/useRestaurantMenu";
import useOnlineStatus from "../util/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";


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
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((card)=>
    card.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-extrabold font-serif text-2xl pt-4 ">{name} </h1>
            <div className="">
                <div className="pb-4 ">
                    <p className="text-xs">{cuisines.join(", ")}</p>
                </div>
            </div>
            {categories.map((category) => (<RestaurantCategory key= {category?.card?.card?.title} data={category.card.card}/>))}
        </div>
    )
}
export default RestaurantMenu;