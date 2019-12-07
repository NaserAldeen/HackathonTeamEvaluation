import React, { Component } from "react";
import SemesterItem from "./SemesterItem";
import { connect } from "react-redux";
import { addSemester } from "../redux/actions";
class SemesterList extends Component {
  state = {
    sem: ""
  };
  handleChange = e => {
    this.setState({ sem: e.target.value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.addSemester(this.state.sem);
    }
  };
  render() {
    if (!this.props.semesters.length) return <h5>Loading..</h5>;
    else {
      const semesterItems = this.props.semesters.map(sem => (
        <SemesterItem semester={sem} />
      ));
      return (
        <div style={{ marginTop: 70 }}>
          <h1 className="text-light mb-5">Admin Page</h1>
          <div class="md-form md-bg form-sm mx-auto w-50">
            <div className="row">
              <div className="col-10 mt-2">
                <input
                  id="form-bg-sm"
                  class="form-control form-control-sm"
                  type="text"
                  value={this.state.sem}
                  placeholder="Add a semester.."
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="col-2">
                <button
                  onClick={semester => this.props.addSemester(this.state.sem)}
                  className="btn btn-primary mt-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-9 mx-auto">
                <div id="accordionExample" class="accordion shadow">
                  {semesterItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    semesters: state.semesters.semesters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addSemester: semester => dispatch(addSemester(semester))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SemesterList);
