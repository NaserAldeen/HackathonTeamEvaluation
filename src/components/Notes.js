import React, { Component } from "react";
import { connect } from "react-redux";
class Notes extends Component {
  render() {
    return (
      <div>
        <p>Add notes:</p>
        <textarea
          style={{ width: 300, height: 200 }}
          onChange={e =>
            this.props.addNotes(this.props.teamName, e.target.value)
          }
        ></textarea>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNotes: (teamName, notes) =>
      dispatch({ type: "SET_NOTES", team: teamName, notes: notes })
  };
};
export default connect(null, mapDispatchToProps)(Notes);
