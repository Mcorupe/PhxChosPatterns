import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "../../index.css";
//moment is a time-stamp formatter lib that im playing with

//pattern details is a completed form
const PatternDetails = props => {
  const { pattern, auth } = props;
  
  if (!auth.uid) return <Redirect to="/signin" />;
  
  if (pattern) {
    console.log(pattern.content);
    return (
      <div>
        <div className="container section pattern-details">
          <div className="card z-depth-0">
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {pattern.authorFirstName}
                {pattern.authorLastName}
              </div>
              {moment(pattern.createdAt.toDate()).format("MMM Do YYYY, LT")}
            </div>
            <div className="card-content">
              <span className="card-title">{pattern.title}</span>
              <div>
                <div className="row">
                  <label className="feet_label col s6 center-align">Feet</label>
                  <label className="hands_label col s6 center-align">
                    Hands
                  </label>
                </div>
                {pattern.content.map((content, idx) => {
                  return (
                    <div>
                      <label className="number_label col s2">{`${idx + 1}`}</label>
                      <div key={idx} className="row line">
                        <div className="feet col s6 ">
                          {Object.keys(content.feet).map(key => {
                            return (
                              <div className="feet col s1.5 push-s1 left-align">
                                {content.feet[key]}
                              </div>
                            );
                          })}
                        </div>
                        <div className="hands col s6 left-align">
                          {Object.keys(content.hands).map(key => {
                            return (
                              <div className="hands col s1.5 push-s3 left-align">
                                {content.hands[key]}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <hr className="with-break" />
                    </div>
                  );
                })}
                <div>{pattern.selectedOption}</div>
              </div>
            </div>
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

// <div>
//   {pattern.content.map((content, idx) => {
//     return (
//       <div key={idx + 1}>
//         <li>
//           {pattern.content.feet}
//           {pattern.content.hands}
//         </li>
//       </div>
//     );
//   })}
// </div>;

// {Object.keys(pattern.content).map((key, idx) => {
//   const display = pattern.content[key];
//   return <li display={display} key={idx}></li>;
// })}

// i want content.map(cry)
// {pattern[0].content.map((pattern,idx) => (
//   <div key={idx}>
//     {pattern[0].content.map((pattern,idx) => (
//       <div key={idx}>
//         <li key={idx}>{pattern.content[idx]}</li>;
//       </div>
//     ))}
//   </div>
// ))}
