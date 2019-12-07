import React, { Component } from "react";
import { connect } from "react-redux";
class StartButton extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          style={{ marginTop: 250 }}
          onClick={() =>
            this.props.user.user
              ? this.props.history.replace("/main")
              : this.props.history.replace("/login")
          }
        >
          Start
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.rootAuth
  };
};

export default connect(mapStateToProps)(StartButton);
