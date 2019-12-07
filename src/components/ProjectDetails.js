import React, { Component } from "react";
import Evaluation from "./Evaluation";
import ShareModal from "./ShareModal";
import EnterName from "./EnterName";
import { connect } from "react-redux";
import { getProject } from "../redux/actions";
import { Tabs, Tab } from "react-bootstrap";
class ProjectDetails extends Component {
  state = {
    currentProject: {},
    locked: "0"
  };
  componentDidMount = () => {
    this.props.getProject(this.props.match.params.projectID);
  };
  render() {
    const project = this.props.currentProject;
    console.log(this.props.currentProject);
    let tabs;
    if (this.props.currentProject.teams)
      tabs = this.props.currentProject.teams.map(team => (
        <Tab
          eventKey={team.name.replace(/\s/g, "")}
          title={team.name}
          className="text-left ml-4 mt-3"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Criteria</th>
                <th scope="col">Avg. Score</th>
                <th scope="col">Weight</th>
                <th scope="col">Weighted Avg.</th>
              </tr>
            </thead>
            <tbody>
              {this.props.currentProject.project_criteria_list.map(cri => (
                <tr>
                  <th scope="row">{cri.name}</th>
                  <td>{Math.floor(Math.random() * 15) + 85}%</td>
                  <td>{cri.weight}</td>
                  <td>
                    {Math.floor(
                      (Math.floor(Math.random() * 15) + 85) * cri.weight * 0.01
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {team.name.endsWith("B") ? (
            <>
              <h4>Notes:</h4>
              <p>
                - <b>Naser said:</b> jfiojlkd
              </p>
              <p>
                - <b>Khara said:</b> uioprfklmc
              </p>

              <p>
                - <b>nigg said:</b> kmf;l
              </p>
              <p>
                - <b>kfsdlksd said:</b> helloo
              </p>
              <p>
                - <b>naser said: </b>fsdlkfsd
              </p>
              <p>
                - <b>ahmad said:</b> opirt
              </p>
            </>
          ) : (
            <>
              <h4>Notes:</h4>
              <p>
                - <b>Naser said: </b>good
              </p>
            </>
          )}
        </Tab>
      ));
    if (this.props.match.params.projectID.endsWith("e")) {
      return <EnterName project={project} />;
    } else
      return (
        <div className="jumbotron jumbotron-fluid mx-auto w-75 mt-5">
          <h2>Project {this.props.match.params.projectID}</h2>
          <h5 className="text-muted mt-3">Fall 2020</h5>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-toggle="modal"
            data-target="#basicExampleModal3"
          >
            Share
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            onClick={() => {
              localStorage.getItem("locked") == "0"
                ? localStorage.setItem("locked", "1")
                : localStorage.setItem("locked", "0");

              this.setState({ locked: Math.random() * 10 });
            }}
          >
            {localStorage.getItem("locked") === "0" ? "Lock" : "Unlock"}
          </button>
          <ShareModal />
          <Tabs id="uncontrolled-tab-example" className="ml-4">
            <Tab eventKey="All" title="All" className="text-left ml-4 mt-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Avg. Score</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Weighted Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.currentProject.project_criteria_list &&
                    this.props.currentProject.project_criteria_list.map(cri => (
                      <tr>
                        <th scope="row">{cri.name}</th>
                        <td>{Math.floor(Math.random() * 15) + 85}%</td>
                        <td>{cri.weight}</td>
                        <td>
                          {Math.floor(
                            (Math.floor(Math.random() * 15) + 85) *
                              cri.weight *
                              0.01
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Tab>
            {tabs}
          </Tabs>
        </div>
      );
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
