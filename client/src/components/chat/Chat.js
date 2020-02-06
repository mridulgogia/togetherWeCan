import React, { Component } from "react";
import DMChatContent from "./DMChatContent";
import DMChatInput from "./DMChatInput";

class DMChat extends Component {
  componentDidMount() {
    [...document.getElementsByClassName("server")].forEach(server => {
      server.addEventListener("mouseover", serverHoverInHandler);
      server.addEventListener("mouseout", serverHoverOutHandler);
      server.addEventListener("click", function() {
        let selected = document.getElementsByClassName(
          "notification-selected"
        )[0];
        selected.nextElementSibling.addEventListener(
          "mouseover",
          serverHoverInHandler
        );
        selected.nextElementSibling.addEventListener(
          "mouseout",
          serverHoverOutHandler
        );
        selected.classList.remove("notification");
        selected.classList.remove("notification-selected");
        selected.classList.add("notification-none");
        this.removeEventListener("mouseover", serverHoverInHandler);
        this.removeEventListener("mouseout", serverHoverOutHandler);
        if (this.previousElementSibling) {
          this.previousElementSibling.classList.remove("notification-hover");
          this.previousElementSibling.classList.remove("notification-none");
          this.previousElementSibling.classList.add("notification");
          this.previousElementSibling.classList.add("notification-selected");
        } else {
          this.parentElement.previousElementSibling.classList.remove(
            "notification-hover"
          );
          this.parentElement.previousElementSibling.classList.remove(
            "notification-none"
          );
          this.parentElement.previousElementSibling.classList.add(
            "notification"
          );
          this.parentElement.previousElementSibling.classList.add(
            "notification-selected"
          );
        }
      });
    });
    function serverHoverInHandler() {
      if (this.previousElementSibling) {
        this.previousElementSibling.classList.add("notification-hover");
        if (
          this.previousElementSibling.className.includes("notification-none")
        ) {
          this.previousElementSibling.classList.add("notification-hover");
        }
      }
    }
    function serverHoverOutHandler() {
      if (this.previousElementSibling) {
        this.previousElementSibling.classList.remove("notification-hover");
      }
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="back-wrapper scrollable">
          <div className="box ex">
            <div className="home d-flex justify-content-center align-items-center">
              <button className="btn btn-primary">Back</button>
            </div>
          </div>
          <div className="box ex">
            <div className="notification notification-selected" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://cdn.myanimelist.net/r/360x360/images/characters/15/308148.jpg?s=89def0ef290ec39d2591fd0bac331321"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification-none" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification-none" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="box ex">
            <div className="notification-none" />
            <div
              className="server"
              data-toggle="tooltip"
              data-placement="right"
              title="friendName"
            >
              <img
                src="https://i.imgur.com/cXz9gpv.jpg"
                alt="logoico"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="chat-dm-friends-wrapper">
          <DMChatContent />
          <DMChatInput />
        </div>
      </div>
    );
  }
}

export default DMChat;
