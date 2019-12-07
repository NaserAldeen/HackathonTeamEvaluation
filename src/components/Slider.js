import React, { Component } from "react";

export default class Slider extends Component {
  state = {
    value: 50
  };
  handleRange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <p>
          - {this.props.name} {Math.floor(this.state.value / 10)}/10
        </p>
        <input
          type="range"
          name="value"
          className="custom-range w-75 mx-auto"
          onChange={this.handleRange}
          id="customRange1"
        />
      </div>
    );
  }
}
