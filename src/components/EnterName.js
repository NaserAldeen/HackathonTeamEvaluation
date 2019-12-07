import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject } from "../redux/actions";
import { Tabs, Tab } from "react-bootstrap";
import { MDBRangeInput } from "mdbreact";
import Slider from "./Slider";
import Notes from "./Notes";
class EnterName extends Component {
  state = {
    start: false,
    name: "",
    value: 0,
    finished: false
  };

  handlePricingChange = value => {
    this.setState({ value });
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  componentDidMount = () => {
    console.log(window.location.href[window.location.href.length - 2]);
    this.props.getProject(
      window.location.href[window.location.href.length - 2]
    );
  };
  handleRange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (!this.state.start)
      return (
        <div className="mt-5 mx-auto">
          {localStorage.getItem("locked") == "1" && (
            <div className="overlayy">
              <h2 className="text-light" style={{ zIndex: 25, marginTop: 400 }}>
                This page is locked by the admin!
              </h2>
            </div>
          )}
          <h3>Enter your name:</h3>
          <input
            className="form-control w-25 mx-auto my-3"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.setState({ start: true })}
          >
            Start
          </button>
        </div>
      );
    else {
      if (!this.props.currentProject || !this.props.currentProject.teams)
        return <h1>Loading..</h1>;

      const tabs = this.props.currentProject.teams.map(team => (
        <Tab
          eventKey={team.name.replace(/\s/g, "")}
          title={team.name}
          className="text-left ml-4 mt-3"
        >
          {this.props.currentProject.project_criteria_list.map(cri => (
            <Slider name={cri.name} />
          ))}
          <Notes
            teamName={team.name}
            disabled={localStorage.getItem("locked") == "1"}
          />
          <button
            disabled={
              !team.name.endsWith("B") || localStorage.getItem("locked") == "1"
            }
            active={this.state.finished}
            className="btn btn-primary"
            onClick={() => alert("Submitted!")}
          >
            Done
          </button>
        </Tab>
      ));

      return (
        <div className="jumbotron jumbotron-fluid mx-auto w-75 mt-5">
          <h4>{this.props.currentProject.name} Evaluation</h4>
          <h5 className="text-muted my-3">Fall 2020</h5>
          <h2>Hello {this.state.name},</h2>
          <p>
            Please watch the presentations of the following teams carefully, and
            judge them according to the criteria below
          </p>

          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="ml-4"
          >
            {tabs}
          </Tabs>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    currentProject: state.semesters.currentProject
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProject: projectID => dispatch(getProject(projectID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EnterName);
