import React, { Component } from "react";
import Evaluation from "./Evaluation";
import ShareModal from "./ShareModal";
import EnterName from "./EnterName";
export default class ProjectDetails extends Component {
  render() {
    if (this.props.match.params.projectID.endsWith("e")) {
      return <EnterName />;
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
          <ShareModal />
          <ul class="nav nav-tabs ml-5" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Team A
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Team B
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <table class="table w-75 mx-auto mt-3">
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Avg. Score</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Weighted Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Presentation</th>
                    <td>95%</td>
                    <td>20</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th scope="row">Functionality</th>
                    <td>90%</td>
                    <td>30</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <th scope="row">Demo</th>
                    <td>86%</td>
                    <td>30</td>
                    <td>28.5</td>
                  </tr>
                  <tr>
                    <th scope="row">Code Quality</th>
                    <td>80%</td>
                    <td>20</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </table>
              <p className="float-right w-75 mx-auto">Total: 87.4%</p>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <table class="table w-75 mx-auto mt-3">
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Avg. Score</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Weighted Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Presentation</th>
                    <td>95%</td>
                    <td>20</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th scope="row">Functionality</th>
                    <td>90%</td>
                    <td>30</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <th scope="row">Demo</th>
                    <td>86%</td>
                    <td>30</td>
                    <td>28.5</td>
                  </tr>
                  <tr>
                    <th scope="row">Code Quality</th>
                    <td>80%</td>
                    <td>20</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </table>
              <p className="float-right w-75 mx-auto">Total: 87.4%</p>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <table class="table w-75 mx-auto mt-3">
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Avg. Score</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Weighted Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Presentation</th>
                    <td>95%</td>
                    <td>20</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th scope="row">Functionality</th>
                    <td>90%</td>
                    <td>30</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <th scope="row">Demo</th>
                    <td>86%</td>
                    <td>30</td>
                    <td>28.5</td>
                  </tr>
                  <tr>
                    <th scope="row">Code Quality</th>
                    <td>80%</td>
                    <td>20</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </table>
              <p className="float-right w-75 mx-auto">Total: 87.4%</p>
            </div>
          </div>
        </div>
      );
  }
}
