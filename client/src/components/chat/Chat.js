import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import DMChatContent from "./DMChatContent";
import DMChatInput from "./DMChatInput";

class DMChat extends Component {
  render() {
    return (
      <div>
        <DMChatContent />
        <DMChatInput />
      </div>
    );
  }
}

// DMChat.propTypes = {
// 	currentView: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
// 	currentView: state.currentView
// });

// export default connect(mapStateToProps)(DMChat);

export default DMChat;
