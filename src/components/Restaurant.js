import { IMAGE_LINK } from "../util/constants";

const RestporantComponent = (props) =>{
    // console.log(props);  //we can pass any arguments we want in reacct it is passingb as props
    // const [name, cuisines ,avgRating,] = props;
    return(
        <div className="rest_container" style={{ backgroundColor : "#f0f0f0"}}>
                <img style={{width : '100%'}} className ="biryani" src= {IMAGE_LINK + props.resData.info.cloudinaryImageId} alt="meghana biryani"/>
                <div className="resto_content">
                    <h3> {props.resData.info.name}</h3>
                    <h4>{props.resData.info.cuisines.join(' , ')}</h4>
                    <h4>{props.resData.info.avgRating} star</h4>
                    <h4>{props.resData.info.costForTwo}</h4>
                    <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
                </div>
        </div>
    )
}

export default RestporantComponent;