import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const BodyComponent = () =>{
    const [restorantList , setrestorantList] = useState([]);
    const [ filteredDataList , setfilteredDataList] = useState([]);
    const [ searchText , setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        getFetchData();
        // constlty operation ned to close before leaving page
        // const timer = setInterval(() =>{
        //     console.log("usereffect set interval")
        // },1000);


        // // unmount()
        // return () =>{
        //     clearInterval(timer);
        // }
    },[]);

    console.log("body rerenders")

    const getFetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // option chanining
        setrestorantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredDataList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // conditional rendering
    // if(restorantList.length == 0){
    //     return <Shimmer />
    // }
    // also works with terbary operator 

    if(onlineStatus === false){
        return(
            <h1>you are offine, Please check your internet connection</h1>
        )
    }
    return restorantList.length == 0 ? <Shimmer /> : (
        <div className="">
            <div className="p-4 m-4">
                <input type="text" className="border-1 pr-2" value={searchText} onChange ={(e) =>{
                    setSearchText(e.target.value);
                }} />

                <button className="bg-green-200 rounded-md px-4 ml-2" onClick = {() =>{
                    console.log(searchText);
                    const filteredData = restorantList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredDataList(filteredData);
                }}>Search  </button>

                <button className="pl-4" onClick = {() =>{
                    const filterdlist  = restorantList.filter(res => res.info.avgRating > 4.2)
                    // console.log(filterdlist)
                    setrestorantList(filterdlist);
                }}> Top rated Restorants</button>

            </div>
            <div className="flex flex-wrap">
                {filteredDataList.map((results) => (
                       <Link key={results.info.id} to={'/resturants/'+results.info.id} className=""><Restaurant  resData = {results}/></Link>
                ))}
             
            </div>
        </div>
    )
}

export default BodyComponent;