import React, { Component } from "react";
import cross from "../../assets/image/cancel.svg";
import right from "../../assets/image/done.svg";
import printer from "../../assets/image/printer.png";
import search from "../../assets/image/search.png";
import {
  StyledButton,
  StyledStatusButton,
} from "../../assets/styles/styledComponent";
import "./mainStyle.css";
import PopUp from "../shared/popUp";

const headerDetails = [
  { id: 0, title: "supplier", description: "East coast fruits & vegetables" },
  { id: 1, title: "shipping date", description: "Thu, Feb 10" },
  { id: 2, title: "Total", description: "$15,0825" },
  { id: 3, title: "Category", description: "🍕🍟🍿🥞🥙🥙" },
  { id: 4, title: "Department", description: "300-444-678" },
  { id: 5, title: "Status", description: "Awaiting your approvel" },
];
const headLine = [
  { id: 0, title: "Product Name" },
  { id: 1, title: "Brand" },
  { id: 2, title: "Price" },
  { id: 3, title: "Quantity" },
  { id: 4, title: "Total" },
  { id: 5, title: "Status" },
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedItem: [
        {
          id: 0,
          img: require("../../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "0",
          total: "$225",
          status: "",
        },
        {
          id: 1,
          img: require("../../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "0",
          total: "$225",
          status: "Missing-Urgent",
        },
        {
          id: 2,
          img: require("../../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "1000",
          total: "$225",
          status: "Approved",
        },
        {
          id: 3,
          img: require("../../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "0",
          total: "$225",
          status: "Missing",
        },
      ],
      PopUpShow: false,
      title: "missing product",
      item: [],
      type:""
    };
  }
  approveItem = (item) => {
    const temp = this.state.detailedItem.filter(
      (value) => value.id === item.id
    );
    this.setState({
      detailedItem: [],
    });
  };
  updateStatus = (status, item) => {
    this.setState({ PopUpShow: false });
    console.log("status,item>>", status, item);
  };
  render() {
    return (
      <>
        <div className="landing-container">
          <div className="landing-border dflex title-cont justifyCont-space-around">
            {headerDetails.map((item) => (
              <div
                key={item.id}
                className="dflex flexDirection-column text-align-start"
              >
                <span className="title-grey">{item.title}</span>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
          <div className="landing-border title-cont">
            <div className="dflex alignItem-center justifyCont-space-between padding-1025">
              <div className="search-bar alignItem-center dflex">
                <input
                  type="text"
                  className="search-inside"
                  placeholder="search...."
                />
                <img src={search} className="search-icon" />
              </div>
              <div className="dflex alignItem-center justifyCont-space-between">
                <StyledButton>Back</StyledButton>
                <img src={printer} className="cart" />
              </div>
            </div>
            <div>
              <div className="dflex">
                {headLine.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: item.id === 0 || item.id === 1 ? "25%" : "10%",
                    }}
                    className="title-grey-small"
                  >
                    {item.title}
                  </div>
                ))}
              </div>

              {this.state.detailedItem.map((item) => (
                <div
                  key={item.id}
                  className="dflex item-bottom alignItem-center"
                >
                  <spna
                    style={{ width: "25%" }}
                    className="dflex alignItem-center"
                  >
                    <img src={item.img} className="item-img" />
                    <span className="text-align-start">{item.productName}</span>
                  </spna>
                  <span style={{ width: "25%" }}>{item.branch}</span>
                  <span style={{ width: "10%" }}>{item.price}</span>
                  <span style={{ width: "10%" }}>{item.quantity}</span>
                  <span style={{ width: "10%" }}>{item.total}</span>
                  {/* <span style={{ width: "10%" }}>{item.status}</span> */}
                  {item.status ? (
                    <StyledStatusButton
                      primary={
                        item.status === "Approved"
                          ? "green"
                          : item.status === "Missing"
                          ? "red"
                          : "fent-red"
                      }
                    >
                      {item.status}
                    </StyledStatusButton>
                  ) : (
                    <span style={{ width: "10%" }} className="status-style">
                      {item.status}
                    </span>
                  )}
                  <span className="dflex flexDirection-row alignItem-center">
                    <img
                      src={cross}
                      className="cross-right-icon margin-10px pointer"
                      onClick={() =>
                        this.setState({
                          PopUpShow: true,
                          title: "missing product",
                          item: item,
                          type:"urgent"
                        })
                      }
                    />
                    <img
                      src={right}
                      className="cross-right-icon margin-10px pointer"
                      onClick={(item) => this.approveItem(item)}
                    />
                    <span
                      className="pointer"
                      onClick={() =>
                        this.setState({
                          PopUpShow: true,
                          title: "",
                          item: item,
                          type:"edit"
                        })
                      }
                    >
                      Edit
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {this.state.PopUpShow && (
          <PopUp
            title={this.state.title}
            item={this.state.item}
            type = {this.state.type}
            onDismiss={() => this.setState({ PopUpShow: false })}
            statusUpdate={(status, item) => this.updateStatus(status, item)}
            send = {(send, item,price,quantity,reason)=>this.sendItem(send, item,price,quantity,reason)}
          />
        )}
      </>
    );
  }
}
export default Landing;
