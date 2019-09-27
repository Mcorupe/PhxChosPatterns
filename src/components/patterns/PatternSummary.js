import React from "react";
import moment from 'moment';

//func component because it only needs props, no state.
const PatternSummary = ({pattern}) => {
  return (
    <div className="card z-depth-0 pattern-summary">
      <div className="card-content grey-text text darken-3">
        <span className="card-title">{pattern.title}</span>
        <p>This is a PatternSummary</p>
        <p>Posted by {pattern.authorFirstName} {pattern.authorLastName}</p>
        <p className="grey-text">{moment(pattern.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default PatternSummary;
