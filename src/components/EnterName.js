import React, { Component } from "react";

export default class EnterName extends Component {
  state = {
    start: false,
    name: ""
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    if (!this.state.start)
      return (
        <div className="mt-5 mx-auto">
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
      return (
        <div className="jumbotron jumbotron-fluid mx-auto w-75 mt-5">
          <h4>Project Evaluation</h4>
          <h5 className="text-muted my-3">Fall 2020</h5>
          <h2>Hello {this.state.name},</h2>
          <p>
            Please watch the presentations of the following teams carefully, and
            judge them according to the criteria below
          </p>

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
            ></div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            ></div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            ></div>
          </div>
        </div>
      );
    }
  }
}
