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
    console.log(pattern.content);

    return (
      <div>
        <div className="container section pattern-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{pattern.title}</span>
              <div>
                {pattern.content.map((content, idx) => {
                  return (
                    <li key={idx} className="content">
                      {Object.keys(content.feet).map((key, idx) => {
                        return <li className="feet">{content.feet[key]}</li>;
                      })}
                      {Object.keys(content.hands).map((key, idx) => {
                        return <li className="hands">{content.hands[key]}</li>;
                      })}
                    </li>
                  );
                })}
              </div>
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
