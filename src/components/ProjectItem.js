import React, { Component } from "react";
import { connect } from "react-redux";
import { addTeam } from "../redux/actions";
import $ from "jquery";
import { Link } from "react-router-dom";

class ProjectItem extends Component {
  state = {
    name: "",
    team_members: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleKeyPress2 = event => {
    if (event.key === "Enter") {
      this.props.addTeam(
        this.state.name,
        this.state.team_members,
        this.props.project.id
      );
      this.setState({ modalClass: "modal fade" });
      $(function() {
        $(`#Modal${this.props.project.id} .close`).click();
      }).bind(this);
    }
  };
  render() {
    const names = this.props.project.teams.map(team => team.name);

    return (
      <li class="list-group-item text-left">
        <Link to={`${this.props.project.id}`}>
          {this.props.project.name} -{" "}
          <span className="text-muted">
            {names.length ? names.join(", ") : "No team assigned"}{" "}
          </span>
        </Link>
        <button
          className="btn btn-primary btn-sm float-right"
          type="button"
          data-toggle="modal"
          data-target={`#Modal${this.props.project.id}`}
        >
          Add students
        </button>
        <div
          class="modal fade"
          data-backdrop="false"
          id={`Modal${this.props.project.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: 555555 }}
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Teams
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Team Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Team name.."
                      onKeyPress={this.handleKeyPress2}
                    />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Students</label>
                    <textarea
                      type="text"
                      name="team_members"
                      onChange={this.handleChange}
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Enter teams seperated by commas.."
                      onKeyPress={this.handleKeyPress2}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => alert(this.props.project.id)}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() =>
                    this.props.addTeam(
                      this.state.name,
                      this.state.team_members,
                      this.props.project.id
                    )
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTeam: (name, teamMemebers, projectID) =>
      dispatch(addTeam(name, teamMemebers, projectID))
  };
};

export default connect(null, mapDispatchToProps)(ProjectItem);
