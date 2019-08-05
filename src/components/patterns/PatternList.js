import React from "react";
import PatternSummary from "./PatternSummary";
import { Link } from "react-router-dom";

const PatternList = ({ patterns }) => {
  return (
    <div className="pattern-list section">
      {patterns &&
        patterns.map(pattern => {
          return (
            <Link to={"/pattern/" + pattern.id} key={pattern.id}>
              <PatternSummary pattern={pattern} />
            </Link>
          );
        })}
    </div>
  );
};

export default PatternList;
