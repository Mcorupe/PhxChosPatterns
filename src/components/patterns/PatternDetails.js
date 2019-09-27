import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
//moment is a time-stamp formatter lib that im playing with

const PatternDetails = props => {
  const { pattern, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (pattern) {
    return (
      //if im destructuring pattern off props... why do i have to use pattern.___
      <div className="container section pattern-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{pattern.title}</span>
            <p>{pattern.content}</p>
            <p>These are PatternDetails</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {pattern.authorFirstName}
              {pattern.authorLastName}
            </div>
            {moment(pattern.createdAt.toDate()).format("MMMM Do YYYY, h:mm")}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center">
      <p>Loading pattern.....</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const patterns = state.firestore.data.patterns;
  const title = state.firestore.data.title;
  const content = state.firestore.data.content;
  const pattern = patterns ? patterns[id] : null;
  return {
    pattern: pattern,
    title: title,
    content: content,
    auth: state.firebase.auth
    //content: state.pattern.content   //shouldnt this be redundant because of pattern: pattern????
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "patterns" }])
)(PatternDetails);
