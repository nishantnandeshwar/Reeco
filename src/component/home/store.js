import React, { Component } from "react";
import { Card } from "../../assets/styles/styledComponent";
import "./mainStyle.css";
import "../../assets/styles/textStyles.css";
import "../../assets/styles/flexStyles.css";
import MenuList from "./menuList";

export default class Store extends Component {
  render() {
    return (
      <>
        <div>
          <MenuList />
        </div>
        <div>
          <Card>
            <div>
              <div className="dflex flexDirection-row justifyCont-center">
                <div>
                  <span className="title-bold">Store Screen</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
