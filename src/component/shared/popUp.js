import React, { Component } from "react";
import "./popUpStyle.css";
import cross from "../../assets/image/cancel.svg";
import "../../assets/styles/flexStyles.css";
import { StyledButton } from "../../assets/styles/styledComponent";
import plus from "../../assets/image/plus.png";
import minus from "../../assets/image/minus.png";
const reason = [
  { id: 0, reason: "Missing Product" },
  { id: 1, reason: "Quantity is not the same" },
  { id: 2, reason: "Price is not the same" },
  { id: 3, reason: "Other" },
];
class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: undefined,
      price: undefined,
      quantity: undefined,
    };
  }
  componentDidMount() {
    this.setState({
      price: this.props.item.price,
      quantity: this.props.item.quantity,
    });
  }
  render() {
    return (
      <div className="modal-content fade justifyCont-center dflex alignItem-center">
        <div
          className="popup-card "
          style={{ width: this.props.type === "urgent" ? "40%" : "50%" }}
        >
          <div className="popup-body">
            {this.props.type === "urgent" ? (
              <div className="flexDirection-row alignItem-center justifyCont-space-between dflex">
                <span>{this.props.title}</span>
                <img
                  src={cross}
                  className="cancle-btn pointer"
                  onClick={this.props.onDismiss}
                />
              </div>
            ) : (
              <div className="dflex justifyCont-end">
                <img
                  src={cross}
                  className="cancle-btn pointer"
                  onClick={this.props.onDismiss}
                />
              </div>
            )}
            {this.props.type === "urgent" && (
              <div className="text-align-start">
                `{this.props.item.productName}... is Urgent?`
              </div>
            )}
            {this.props.type === "edit" && (
              <>
                <div className="alignItem-center justifyCont-space-between dflex">
                  <span>{this.props.item.productName}</span>
                </div>
                <div className="flexDirection-row dflex justifyCont-space-around alignItem-center">
                  <div>
                    <img src={this.props.item.img} className="item-image" />
                  </div>
                  <div className="dflex flexDirection-column alignItem-center">
                    <div className="dflex w-100per alignItem-center">
                      <span className="w-30per dflex justifyCont-start">
                        Price ($)
                      </span>
                      <input
                        type="number"
                        className="input-box"
                        value={this.state.price}
                        onChange={(e) =>
                          this.setState({ price: e.target.value })
                        }
                      />
                      <span className="margin-10px">/6*1LB</span>
                    </div>
                    <div className="dflex w-100per alignItem-center">
                      <span className="w-20per">Quantity</span>
                      <img
                        src={plus}
                        onClick={() =>
                          this.setState({ quantity: this.state.quantity + 1 })
                        }
                        className="inc-dec-img margin-10px pointer"
                      />{" "}
                      <input
                        type="number"
                        className="input-box"
                        value={this.state.quantity}
                        onChange={(e) =>
                          this.setState({ quantity: e.target.value })
                        }
                      />
                      <img
                        src={minus}
                        onClick={() =>
                          this.setState({ quantity: this.state.quantity - 1 })
                        }
                        className="inc-dec-img margin-10px pointer"
                      />
                      <span className="margin-10px">/6*1LB</span>
                    </div>
                    <div className="dflex w-100per">
                      <span className="w-30per dflex justifyCont-start">
                        Total{" "}
                      </span>
                      <span>($){this.state.quantity * this.state.price}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="dflex">
                    <span>Choose reason</span>
                    <span>(Optional)</span>
                  </div>
                  <div className="margin-10px">
                    {reason.map((item) => (
                      <span
                        className="reason-style pointer"
                        key={item.id}
                        style={{
                          backgroundColor:
                            this.state.reason === item.reason
                              ? "#959292c2"
                              : "white",
                          color:
                            this.state.reason === item.reason
                              ? "white"
                              : "black",
                        }}
                        onClick={() => this.setState({ reason: item.reason })}
                      >
                        {item.reason}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="popup-footer">
            {this.props.type === "urgent" && (
              <>
                <span
                  onClick={() =>
                    this.props.statusUpdate("NotUrgent", this.props.item)
                  }
                >
                  No
                </span>
                <span
                  onClick={() =>
                    this.props.statusUpdate("Urgent", this.props.item)
                  }
                >
                  Yes
                </span>
              </>
            )}
            {this.props.type === "edit" && (
              <div className="dflex justifyCont-end margin-top-25px">
                <StyledButton onClick={this.props.onDismiss}>
                  Cancle
                </StyledButton>
                <StyledButton
                  primary
                  onClick={() =>
                    this.props.send(
                      "send",
                      this.props.item,
                      this.state.price,
                      this.state.quantity,
                      this.state.reason
                    )
                  }
                >
                  Send
                </StyledButton>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default PopUp;
