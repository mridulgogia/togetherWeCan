import React, { Component } from "react";

class DMChatInput extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleEnter(event) {
    console.log(event.key);
  }
  onSubmit(event) {
    if (event) event.preventDefault();
    const message = this.state.message;
    console.log(message);
  }
  componentDidMount() {
    document.getElementById("message").addEventListener("keydown", event => {
      if (event.key === "Enter") this.onSubmit();
    });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    let divStyle = { maxWidth: "98%" };
    return (
      <div style={divStyle}>
        <form
          onSubmit={this.onSubmit}
          noValidate
          className="message-input-form mx-3 d-flex"
        >
          <div
            className="mt-2"
            style={{
              backgroundColor: "#fff",
              maxHeight: "144px",
              borderRadius: "8px",
              width: "98%"
            }}
          >
            <div className="d-flex">
              <div style={{ width: "0", height: "0", position: "relative" }}>
                <input
                  type="file"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: "0",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer"
                  }}
                  multiple
                  id="chatUpload"
                  tabIndex="-1"
                />
              </div>
              <div className="upload-btn-wrapper">
                <button
                  type="button"
                  className="chat-btn d-flex"
                  onClick={() => {
                    document.getElementById("chatUpload").click();
                  }}
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png"
                    style={{ maxHeight: "1rem" }}
                    alt="plus"
                  />
                </button>
              </div>
              <input
                type="textarea"
                placeholder="@Username"
                style={{
                  height: "44px",
                  width: "90%",
                  background: "transparent",
                  borderRadius: "8px"
                }}
                id="message"
                name="message"
                onChange={this.onChange}
                className="d-flex align-items-center pl-2"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DMChatInput;
