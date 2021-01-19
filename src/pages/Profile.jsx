import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser"
const { default: ProfileStudent } = require("./ProfileStudent");
const { default: ProfileMentor } = require("./ProfileMentor");
// logique comparaison
class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: null
    //     };
    // }
    // componentDidMount() {
    //     /* fetch user from database */
    //     //this.setState({user: this.props.context.user});
    // }
    render() {
        const { user } = this.props.context;
console.log(this.props);
console.log(user.accountType);
        // if (user === null) {
        //     console.log("Loading...");
        // }
        // if (user.accountType === 'student') {
        //     return <ProfileStudent user={user}/>;
        // }
        // return <ProfileMentor user={user}/>;
//return <p>ok</p>
       return !user ? <h1>No user tho</h1>  : user.accountType === "Student" ? <ProfileStudent user={user}/> : <ProfileMentor user={user}/>
    }
}
export default withUser(Profile);