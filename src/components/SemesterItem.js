import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import { connect } from "react-redux";
import { addProject, addCriterion } from "../redux/actions";
import $ from "jquery";
class SemesterItem extends Component {
  state = {
    name: "",
    weight: "",
    criteria: [],
    criterion: "",
    criWeight: "",
    modalClass: "modal fade"
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange2 = e => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ criteria: value });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.addProject(
        this.props.semester.id,
        this.state.name,
        this.state.weight,
        this.state.criteria
      );
    }
  };
  handleKeyPress2 = event => {
    if (event.key === "Enter") {
      this.props.addCriterion(this.state.criterion, this.state.criWeight);
      this.setState({ modalClass: "modal fade" });
      $(function() {
        $("#basicExampleModal .close").click();
      });
    }
  };
  render() {
    const { selected } = this.state;
    const projectItems = this.props.semester.projects
      ? this.props.semester.projects.map(proj => (
          <ProjectItem key={proj.id} project={proj} />
        ))
      : null;
    //   const criteria = this.props.projects
    //   ? this.props.semester.projects.map(proj => <ProjectItem project={proj} />)
    //   : null;
    const criteria = this.props.criteria.map(cri => (
      <option value={cri.id}>
        {cri.name} - {cri.weight}
      </option>
    ));
    return (
      <div class="card">
        <div id="headingOne" class="card-header bg-white shadow-sm border-0">
          <h2 class="mb-0">
            <button
              type="button"
              data-toggle="collapse"
              data-target={"#" + this.props.semester.name.replace(/\s/g, "")}
              aria-controls="collapseOne"
              class="btn btn-link text-dark font-weight-bold text-uppercase collapsible-link"
            >
              {this.props.semester.name}
            </button>
          </h2>
        </div>
        <div
          id={this.props.semester.name.replace(/\s/g, "")}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
          class="collapse"
        >
          <div class="card-body p-5">
            <p>
              <button
                class="btn btn-primary btn-sm"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                + Add Project
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body mb-3">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm mt-1"
                      placeholder="Project name"
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}
                      onSubmit={this.handleSubmit}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="weight"
                      className="form-control form-control-sm mt-1"
                      placeholder="Weight"
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}
                    />
                  </div>
                  <div className="col">
                    <select
                      class="custom-select w-50 my-3 "
                      ref="sel"
                      multiple
                      onChange={this.handleChange2}
                      onKeyPress={this.handleKeyPress}
                    >
                      {criteria}
                    </select>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      data-toggle="modal"
                      data-target="#basicExampleModal"
                    >
                      +
                    </button>

                    <div
                      class={this.state.modalClass}
                      data-backdrop="false"
                      id="basicExampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      style={{ zIndex: 555555 }}
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Create Criterion
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
                                <label for="formGroupExampleInput">Name</label>
                                <input
                                  type="text"
                                  name="criterion"
                                  onChange={this.handleChange}
                                  class="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Example input"
                                  onKeyPress={this.handleKeyPress2}
                                />
                              </div>
                              <div class="form-group">
                                <label for="formGroupExampleInput2">
                                  Weight
                                </label>
                                <input
                                  type="text"
                                  name="criWeight"
                                  onChange={this.handleChange}
                                  class="form-control"
                                  id="formGroupExampleInput2"
                                  placeholder="Another input"
                                  onKeyPress={this.handleKeyPress2}
                                />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-dismiss="modal"
                              onClick={() =>
                                this.props.addCriterion(
                                  this.state.criterion,
                                  this.state.criWeight
                                )
                              }
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-sm mb-2"
                  onClick={() =>
                    this.props.addProject(
                      this.props.semester.id,
                      this.state.name,
                      this.state.weight,
                      this.state.criteria
                    )
                  }
                >
                  Add
                </button>
              </div>
            </div>
            <ul class="list-group">
              {this.props.semester.projects
                ? projectItems
                : "No projects found!"}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    criteria: state.semesters.criteria
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProject: (semesterID, projectName, projectWeight, criteria) =>
      dispatch(addProject(semesterID, projectName, projectWeight, criteria)),
    addCriterion: (name, weight) => dispatch(addCriterion(name, weight))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SemesterItem);
