import { Component } from "react";
import User from "./User";
import UserClassComponent from "./UserClassComponent";

// class About extends React.Component both synatx are valid only
class About extends Component{
    constructor(props){
        console.log("parent constructor");
        super(props);
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>ABout US</h1>
                <UserClassComponent name={'sunita'} />
            </div>
        )
    }
}
export default About;