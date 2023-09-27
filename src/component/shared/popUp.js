import React, { Component } from "react";
import "./popUpStyle.css";
import cross from "../../assets/image/cancel.svg";
import "../../assets/styles/flexStyles.css";
import '../../assets/styles/textStyles.css'
import { StyledButton } from "../../assets/styles/styledComponent";
import plus from "../../assets/image/plus.png";
import minus from "../../assets/image/minus.png";
import {reason} from '../utils/data'
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
          style={{ width: this.props.type === "urgent" ? "30%" : "50%" }}
        >
          <div className="popup-body">
            {this.props.type === "urgent" ? (
              <div className="flexDirection-row alignItem-center justifyCont-space-between dflex">
                <span className="title-bold-mid-large-size">{this.props.title}</span>
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
              <div className="text-align-start margin-10px">
                `{this.props.item.productName}... is Urgent?`
              </div>
            )}
            {this.props.type === "edit" && (
              <>
                <div className="alignItem-center justifyCont-space-between dflex">
                  <span className="title-bold-mid-size">{this.props.item.productName}</span>
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
                      <span className="margin-10px">x 6*1LB</span>
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
                  <div className="dflex alignItem-center">
                    <span className="title-bold-mid-size">Choose reason</span>
                    <span className="title-grey">(Optional)</span>
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
              <div className="dflex justifyCont-end">
                <span
                  onClick={() =>
                    this.props.statusUpdate("NotUrgent", this.props.item)
                  }
                  className="margin-10px pointer title-bold-mid-size"
                >
                  No
                </span>
                <span
                  onClick={() =>
                    this.props.statusUpdate("Urgent", this.props.item)
                  }
                  className="margin-10px pointer title-bold-mid-size"
                >
                  Yes
                </span>
              </div>
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
