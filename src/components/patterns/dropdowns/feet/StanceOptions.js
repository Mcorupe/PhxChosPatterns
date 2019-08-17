import React from "react";
import { Dropdown } from "semantic-ui-react";
//going to remove Semantic

const stanceOptions = [
  {
    key: "Back Stance",
    text: "Back Stance",
    value: "Back Stance",
    className: "feet"
  },
  {
    key: "Forward Stance",
    text: "Forward Stance",
    value: "Forward Stance",
    className: "feet"
  },
  {
    key: "Horse Riding Stance",
    text: "Horse Riding Stance",
    value: "Horse Riding Stance",
    className: "feet"
  },
  {
    key: "Rear Foot Stance",
    text: "Rear Foot Stance",
    value: "Rear Foot Stance",
    className: "feet"
  },
  {
    key: "Tiger Stance",
    text: "Tiger Stance",
    value: "Tiger Stance",
    className: "feet"
  },
  {
    key: "Uneven Stance",
    text: "Uneven Stance",
    value: "Uneven Stance",
    className: "feet"
  },
  {
    key: "Paralell Stance",
    text: "Paralell Stance ",
    value: "Paralell Stance",
    className: "feet"
  },
  {
    key: "Closed Foot Stance",
    text: "Closed Foot Stance",
    value: "Closed Foot Stance",
    className: "feet"
  },
  {
    key: "Crane Stance",
    text: "Crane Stance",
    value: "Crane Stance",
    className: "feet"
  }
];

const DropdownStanceOptions = props => (
  <Dropdown
    className="feet"
    onChange={props.onChange}
    placeholder="Stances"
    multiple
    selection
    options={stanceOptions}
    clearable={true}
  />
);

export default DropdownStanceOptions;
