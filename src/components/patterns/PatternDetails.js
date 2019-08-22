import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
//moment is a time-stamp formatter lib
//https://stackoverflow.com/questions/45827542/objects-are-not-valid-as-a-react-child-data-from-mongodb?noredirect=1&lq=1
// CHECK LINE 19..but its gettin mapState2Props????

const PatternDetails = props => {
  const { pattern, auth, line} = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (pattern) {
    return (
      <div className="container section pattern-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{pattern.title}</span>
            <p>{line} </p>
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
  const pattern = patterns ? patterns[id] : null;
  return {
    pattern: pattern,
    auth: state.firebase.auth,
    line: state.pattern.line   //shouldnt this be redundant because of patter: pattern????
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "patterns" }])
)(PatternDetails);
