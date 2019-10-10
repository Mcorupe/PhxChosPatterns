import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSort } from "../../store/actions/patternActions";

class SortName extends Component {
  onChangeName = event => {
    //this.setState({patterns: this.pattern.})
  };
  render() {
    const { pattern, updateSort } = this.props;
    return (
      <div>
        <div className="row">
          <button
            className="btn waves-effect waves-light"
            sort="SORT_TITLE"
            updateSort={updateSort}
          >
            Sort By Pattern
          </button>
          <button
            className="btn waves-effect waves-light"
            sort="SORT_BY_DATE"
            updateSort={updateSort}
          >
            Sort By Date
          </button>
          <button
            className="btn waves-effect waves-light"
            sort="SORT_AUTHOR_FIRST_NAME"
            updateSort={updateSort}
          >
            Sort By Author
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    updateSort: state.pattern
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortName);
