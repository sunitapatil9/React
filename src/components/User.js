import { useState } from "react";
const User = (props) =>{
    // state variable creation
    // const count = useState(0);
    // const count2 = useState(1);

    const {name} = props ;

    return (
        <div className="user-card">
            <h1>User Component</h1>
            {/* <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1> */}
            <h2>Name :  {name}</h2>
            <h6>Location : Athani</h6>
            <h6>Profession : Software Engineering</h6>
        </div>
    )
}
export default User ;