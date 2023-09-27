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
import { connect } from "react-redux";
import { food } from "../../redux/dataSlice";
import { headerDetails, headLine, dataValue } from "../utils/data";
// const headerDetails = [
//   { id: 0, title: "supplier", description: "East coast fruits & vegetables" },
//   { id: 1, title: "shipping date", description: "Thu, Feb 10" },
//   { id: 2, title: "Total", description: "$15,0825" },
//   { id: 3, title: "Category", description: "🍕🍟🍿🥞🥙🥙" },
//   { id: 4, title: "Department", description: "300-444-678" },
//   { id: 5, title: "Status", description: "Awaiting your approvel" },
// ];
// const headLine = [
//   { id: 0, title: "Product Name" },
//   { id: 1, title: "Brand" },
//   { id: 2, title: "Price" },
//   { id: 3, title: "Quantity" },
//   { id: 4, title: "Total" },
//   { id: 5, title: "Status" },
// ];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedItem: [],
      PopUpShow: false,
      title: "missing product",
      item: [],
      type: "",
    };
  }
  componentDidMount() {
    {
      this.props.readData.length === 0
        ? this.setState({ detailedItem: dataValue })
        : this.setState({ detailedItem: this.props.readData });
    }
  }
  approveItem = (item) => {
    const updatedDetailedItem = this.state.detailedItem.map((el) =>
      el.id === item.id ? Object.assign({}, el, { status: "Approved" }) : el
    );
    this.setState({ detailedItem: updatedDetailedItem });
    this.props.food(updatedDetailedItem);
  };
  updateStatus = (status, item) => {
    this.setState({ PopUpShow: false });
    const updatedDetailedItem = this.state.detailedItem.map((el) =>
      el.id === item.id
        ? Object.assign({}, el, {
            status:
              status === "NotUrgent"
                ? "Missing"
                : status === "Urgent"
                ? "Missing-Urgent"
                : "",
          })
        : el
    );
    this.setState({ detailedItem: updatedDetailedItem });
    this.props.food(updatedDetailedItem);
  };
  sendItem = (send, item, price, quantity, reason) => {
    const updatedDetailedItem = this.state.detailedItem.map((el) =>
      el.id === item.id
        ? Object.assign({}, el, {
            price: price,
            quantity: quantity,
            total: price * quantity,
          })
        : el
    );
    this.setState({ detailedItem: updatedDetailedItem, PopUpShow: false });
    this.props.food(updatedDetailedItem);
  };
  render() {
    return (
      <>
        <div className="landing-container">
          <div className="landing-border dflex title-cont justifyCont-space-around">
            {headerDetails.map((item) => (
              <div
                key={item.id}
                className="dflex flexDirection-column text-align-start vertical-bar"
              >
                <span className="title-grey">{item.title}</span>
                <span className="title-bold-mid-size">{item.description}</span>
              </div>
            ))}
          </div>
          <div className="landing-border title-cont overflow-x">
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

              {this.state.detailedItem?.map((item) => (
                <div
                  key={item.id}
                  className="dflex item-bottom alignItem-center"
                >
                  <span
                    style={{ width: "25%" }}
                    className="dflex alignItem-center"
                  >
                    <img src={item.img} className="item-img" />
                    <span className="text-align-start">{item.productName}</span>
                  </span>
                  <span style={{ width: "25%" }}>{item.branch}</span>
                  <span style={{ width: "10%" }}>{item.price}/6*1LB</span>
                  <span style={{ width: "10%" }}>
                    <span className="title-bold-mid-size">{item.quantity}</span>
                    x6*1LB
                  </span>
                  <span style={{ width: "10%" }}>${item.total}</span>
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
                      src={right}
                      className="cross-right-icon margin-10px pointer"
                      onClick={() => this.approveItem(item)}
                    />
                    <img
                      src={cross}
                      className="cross-right-icon margin-10px pointer"
                      onClick={() =>
                        this.setState({
                          PopUpShow: true,
                          title: "missing product",
                          item: item,
                          type: "urgent",
                        })
                      }
                    />

                    <span
                      className="pointer"
                      onClick={() =>
                        this.setState({
                          PopUpShow: true,
                          title: "",
                          item: item,
                          type: "edit",
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
            type={this.state.type}
            onDismiss={() => this.setState({ PopUpShow: false })}
            statusUpdate={(status, item) => this.updateStatus(status, item)}
            send={(send, item, price, quantity, reason) =>
              this.sendItem(send, item, price, quantity, reason)
            }
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  readData: state.food.dataValue,
});

const mapDispatchToProps = {
  food,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
