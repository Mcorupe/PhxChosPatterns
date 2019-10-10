import React, { Component } from "react";

export class SortName extends Component {
  onChangeName = event => {
    //this.setState({patterns: this.pattern.})    
  };
  render() {
    return (
      <div>
        <div className="row">
          <button
            className="btn waves-effect waves-light"
            onChange={this.onChangeName}
          >
            Sort By Name
          </button>
          <button className="btn waves-effect waves-light">Sort By Date</button>
          <button className="btn waves-effect waves-light">
            Sort By Author
          </button>
        </div>
      </div>
    );
  }
}

export default SortName;
