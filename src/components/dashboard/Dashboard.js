import React, { Component } from "react";
import Notifications from "./Notifications";
import PatternList from "../patterns/PatternList";
import SortName from "../sorting/sort"
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //console.log(this.props + " dashboard this.props")

    const { patterns, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <SortName />
        <div className="row">
          <div className="col s12 m6">
            <PatternList patterns={patterns} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patterns: state.firestore.ordered.patterns,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "patterns" }])
)(Dashboard);
