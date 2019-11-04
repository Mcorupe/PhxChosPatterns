import React, { Component } from "react";
import Notifications from "./Notifications";
import PatternList from "../patterns/PatternList";
import SortName from "../sorting/sort";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { patterns, auth } = this.props;
    console.log(auth, "---------auth");
    console.log(patterns, "MY FRIGGIN PATTERNS");
    if (!auth.uid) return <Redirect to="/signin" />;
    if (auth.uid === "dkRjWaoQBcOEhZM4eB7wY9x6UZ12") {
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
    } else {
      const { id } = this.props;
      return (
        <div className="dashboard container">
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
