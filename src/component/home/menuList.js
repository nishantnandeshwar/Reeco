import React, { Component } from "react";
import "./mainStyle.css";
import "../../assets/styles/textStyles.css";
import "../../assets/styles/flexStyles.css";

import { Link } from "react-router-dom";
const menuList = [
  { path: "/", label: "Home" },
  { path: "/store", label: "Store" },
  { path: "/order", label: "Order" },
];

export default class MenuList extends Component {
  render() {
    return (
      <div className="header-container overflow-x">
        <div className="dflex alignItem-center header-margin overflow-x">
          <span className="large-menu pointer">TapSoft</span>
          <span className="dflex">
            {menuList.map((item, id) => (
              <ul key={id} className={"menu pointer"}>
                <Link to={item.path} className="custom-link">{item.label}</Link>
              </ul>
            ))}
          </span>
        </div>
        <div className="header-margin alignItem-center dflex">
          <span className="menu pointer">Hello, Nishant</span>
        </div>
      </div>
    );
  }
}
