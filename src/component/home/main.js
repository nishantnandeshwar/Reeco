import React, { Component } from "react";
import Landing from "./landing";
import cart from "../../assets/image/shopping-cart.png";
import downArrow from "../../assets/image/down-arrow.png";
import "./mainStyle.css";
import "../../assets/styles/textStyles.css";
import "../../assets/styles/flexStyles.css";
import { Card,StyledButton } from "../../assets/styles/styledComponent";

const menuTitle = ["store", "order", "analytics"];

class MainScreen extends Component {
  render() {
    return (
      <div>
        <div className="header-container overflow-x">
          <div className="dflex alignItem-center header-margin overflow-x">
            <span className="large-menu pointer">Reeco</span>
            <span className="dflex">
              {menuTitle.map((item, id) => (
                <ul key={id} className={"menu pointer"}>
                  {item}
                </ul>
              ))}
            </span>
          </div>
          <div className="header-margin alignItem-center dflex">
            <img src={cart} className="cart header-margin pointer" />
            <span className="menu pointer">Hello, Nishant</span>
            <img src={downArrow} className="cart pointer" />
          </div>
        </div>
        <Card>
          <div>
            <div className="dflex flexDirection-row">
              <span className="title-grey-small-text">Order {">"} <span className="underLine">Order 32222</span></span>
            </div>
            <div
            className="dflex flexDirection-row justifyCont-space-between">
              <div>
                <span className="title-bold">Order 32222</span>
              </div>
              <div>
                <StyledButton>Back</StyledButton>
                <StyledButton primary>Approve order</StyledButton>
              </div>
            </div>
          </div>
        </Card>
        <div>
          <Landing />
        </div>
      </div>
    );
  }
}
export default MainScreen;
