const RestporantComponent = (props) =>{
    // console.log(props);  //we can pass any arguments we want in reacct it is passingb as props
    // const [name, cuisines ,avgRating,] = props;
    return(
        <div className="rest_container" style={{ backgroundColor : "#f0f0f0"}}>
                <img style={{width : '100%'}} className ="biryani" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.resData.info.cloudinaryImageId} alt="meghana biryani"/>
                <h3> {props.resData.info.name}</h3>
                <h4>{props.resData.info.cuisines.join(' , ')}</h4>
                <h4>{props.resData.info.avgRating} star</h4>
                <h4>{props.resData.info.costForTwo}</h4>
                <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestporantComponent;