import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const flexStyle = {
      display: "flex",
      justifyContent: "space-around",
      alignContent: "center",
      maxWidth: "50vw"
    };
    return (
      <div style={flexStyle}>
        <div
          style={{
            width: "3em",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            verticalAlign: "middle",
            padding: "1em"
          }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          <span className="fa fa-plus" />
        </button>
        <button
          className={`btn btn-secondary m-2${
            this.props.counter.value === 0 ? " disabled" : ""
          }`}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          <span className="fa fa-minus" />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    return `badge m-2 badge-${
      this.props.counter.value === 0 ? "warning" : "primary"
    }`;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
