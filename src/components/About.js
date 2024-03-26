import { Component } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //best place to make an api call
  }
  render() {
    return (
      <div>
        <h1>This is About page</h1>
        <p>This is a food delivery app</p>
        {/* <UserContext.Consumer>
                    {({user})=><h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
                </UserContext.Consumer> */}
        {/* {Outlet} */}
        {/* <ProfileClass/>  */}
        {/* <Profile /> */}
      </div>
    );
  }
}

export default About;
