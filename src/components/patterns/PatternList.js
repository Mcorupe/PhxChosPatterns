import React from "react";
import PatternSummary from "./PatternSummary";
import { Link } from "react-router-dom";

//ok so patternS isnt patterN... sorting i think needs to happen on patterN. maybe. probably.
// authorFirstName.VALUE is "hurrr"

//A PatternList is the displaying of all written patterns "the main page"
const PatternList = ({ patterns }) => {
  return (
    <div className="pattern-list section">
      {patterns &&
        patterns.map(pattern => {
          console.log(pattern);
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
