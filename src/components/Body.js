import RestporantComponent from "./Restorant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () =>{
    const [restorantList , setrestorantList] = useState([]);
    const [ filteredDataList , setfilteredDataList] = useState([]);
    const [ searchText , setSearchText] = useState("");

    useEffect(()=>{
        getFetchData();
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
    return restorantList.length == 0 ? <Shimmer /> : (
        <div className="body_section">
            <div className="filter">
                <input type="text" className="search-text" value={searchText} onChange ={(e) =>{
                    setSearchText(e.target.value);
                }} />

                <button className="search-btn" onClick = {() =>{
                    console.log(searchText);
                    const filteredData = restorantList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredDataList(filteredData);
                }}>Search</button>

                <button className="filter-btn" onClick = {() =>{
                    const filterdlist  = restorantList.filter(res => res.info.avgRating > 4.2)
                    // console.log(filterdlist)
                    setrestorantList(filterdlist);
                }}>Top rated Restorants</button>

            </div>
            <div className="resto__section">
                {filteredDataList.map((results) => (
                       <RestporantComponent key={results.id} resData = {results}/>
                ))}
             
            </div>
        </div>
    )
}

export default BodyComponent;