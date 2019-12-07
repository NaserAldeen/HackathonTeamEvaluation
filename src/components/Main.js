import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

class Main extends Component {
  render() {
    return (
      <div>
        <h2>The list</h2>
        {!this.props.user.user ? (
          <button
            className="btn btn-primary"
            onClick={() => this.props.history.replace("/login")}
          >
            Login
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => this.props.logout()}
          >
            Logout
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.rootAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
