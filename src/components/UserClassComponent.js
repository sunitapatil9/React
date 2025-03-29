import React from "react";
import UserContext from "../util/UserContext";

class UserClassComponent extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor");

        this.state ={
            // count : 0,
            userInfo :{
                name : "abcd",
                location : "dummy"
            }
        }
    }
    async componentDidMount(){
        console.log("child componentDidMount");
        const data = await fetch("https://api.github.com/users/sunitapatil9");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        });
        

        // how to unmount the things
        this.timer = setInterval (() =>{
            console.log("setinterveal called")
        },1000)
    }
    componentDidUpdate(){
        console.log("component upadted after render")
    }
    componentWillUnmount(){
        console.log("unmount the component");
        clearInterval(this.timer);
    }
    render(){
        console.log("child render");
        // destructuring the props
        // const {name} = this.props;
        // const {count} = this.state;
        const {name,location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <h1>User Component</h1>
                {/* without destructuring */}
                {/* <h2>{this.props.name}</h2> */}
                {/* <h1>Count : {this.state.count}</h1> */}
                {/* <h1>Count :{count}</h1> */}
                {/* <button onClick = {() =>{
                    this.setState({
                        count : this.state.count + 1,
                    }) */}
                {/* }}>User Count</button> */}
                <h2>Name : {name}</h2>
                <h6>Location : {location}</h6>
                <UserContext.Consumer> 
                    {/* it takes callback function for classbased component i have to access like this we can use it multiple times also */}
                    {({loggedinUser}) =>(
                        <h6> loggedinUser : {loggedinUser}</h6>
                    ) }
                </UserContext.Consumer>
                
                <h6>Profession : Software Engineering</h6>
                <img src={avatar_url} />
            </div>
        )
    }
}
export default UserClassComponent;