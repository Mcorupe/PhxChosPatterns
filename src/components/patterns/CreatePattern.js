import React, { Component } from "react";
import { createPattern } from "../../store/actions/patternActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreatePattern extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    //e.preventDefault();
    this.props.createPattern(this.state);
    window.alert("Submitted pattern!!");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="containter">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Pattern</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Pattern Content</label>
            <textarea
              className="materialze-textarea"
              id="content"
              cols="30"
              rows="10"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn teal lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createPattern: pattern => dispatch(createPattern(pattern))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePattern);
