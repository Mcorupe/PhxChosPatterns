import React from "react";

//func component because it only needs props, no state.
const PatternSummary = ({pattern}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text darken-3">
        <span className="card-title">{pattern.title}</span>
        <p>Posted by Mark Corupe</p>
        <p className="grey-text">16th July, 12:04PM</p>
      </div>
    </div>
  );
};

export default PatternSummary;
