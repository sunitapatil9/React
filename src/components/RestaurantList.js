import { useDispatch } from "react-redux";
import { IMAGE_LINK } from "../util/constants";
import { addItem } from "../util/cartSlice";


const RestaurantList = ({itemlist}) =>{
    //  console.log(itemlist);
    const dispatch = useDispatch();

    const handleAddItems = (item) =>{
        dispatch(addItem(item))
    }  
    return(     
        <div>
            {itemlist.map((item) =>(
                <div key={item.card.info.id} className="px-4  flex justify-between py-4 border-b-2 border-gray-200" >
                    <div className="text-left w-10/12">
                        <span className="font-bold">{item.card.info.name} - </span>
                        <span> ₹ {item.card.info.price /100}</span>
                        <div className="text-xs py-4">{item.card.info.description}</div>
                    </div>
                    <div className="w-2/12">
                        <button onClick={() =>  handleAddItems(item)} className="absolute text-white align-middle bg-black p-2 cursor-pointer">Add + </button>
                        <img src={IMAGE_LINK + item.card.info.imageId } />
                    </div>
                </div>
            ))}
        </div>
    
        
    )
}
export default RestaurantList;