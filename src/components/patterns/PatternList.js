import React from "react";
import PatternSummary from "./PatternSummary";
import { Link } from "react-router-dom";

const PatternList = ({ patterns }) => {
  return (
    <div className="pattern-list section">
      {patterns &&
        patterns.sort((a, b) => a.authorFirstName.value > b.authorFirstName.value).map(pattern => {
          //ok so patternS isnt patterN... sorting i think needs to happen on patterN. maybe. probably. 
          // authorFirstName.VALUE is "hurrr undefined"
          console.log(pattern)
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
