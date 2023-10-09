import React, { Component } from "react";
import Landing from "./landing";
import "./mainStyle.css";
import "../../assets/styles/textStyles.css";
import "../../assets/styles/flexStyles.css";
import MenuList from "./menuList";

class MainScreen extends Component {
  render() {
    return (
      <div>
        <MenuList />
        <div>
          <Landing />
        </div>
      </div>
    );
  }
}
export default MainScreen;
