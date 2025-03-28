import { IMAGE_LINK } from "../util/constants";


const RestaurantList = (itemlist) =>{
    // console.log(itemlist.itemlist.card.info);   
    return(
        // <div>
            <div className="px-4  flex justify-between py-4 border-b-2 border-gray-200" >
            <div className="text-left w-10/12">
                <span className="font-bold">{itemlist.itemlist.card.info.name} - </span>
                <span> ₹ {itemlist.itemlist.card.info.price /100}</span>
                <div className="text-xs py-4">{itemlist.itemlist.card.info.description}</div>
            </div>
            <div className="w-2/12">
                <img src={IMAGE_LINK + itemlist.itemlist.card.info.imageId } />
            </div>
        </div>
        // </div>
    )
}
export default RestaurantList;