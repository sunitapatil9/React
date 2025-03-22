import { IMAGE_LINK } from "../util/constants";

const RestporantComponent = (props) =>{
    // console.log(props);  //we can pass any arguments we want in reacct it is passingb as props
    // const [name, cuisines ,avgRating,] = props;
    return(
        <div className="p-4 m-4 w-48 bg-gray-100">
                <img className ="w-38" src= {IMAGE_LINK + props.resData.info.cloudinaryImageId} alt="meghana biryani"/>
                <div className="resto_content">
                    <h3 className="font-bold py-4">{props.resData.info.name}</h3>
                    <p className="">{props.resData.info.cuisines.join(' , ')}</p>
                    <p>{props.resData.info.avgRating} star</p>
                    <p>{props.resData.info.costForTwo}</p>
                    <p>{props.resData.info.sla.deliveryTime} minutes</p>
                </div>
        </div>
    )
}

export default RestporantComponent;