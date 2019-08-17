import React from "react";
import { Dropdown } from "semantic-ui-react";
//going to remove Semantic

const kickOptions = [
  {
    key: "Front Snap Kick",
    text: "Front Snap Kick",
    value: "Front Snap Kick",
    className: "feet"
  },
  {
    key: "Side Kick",
    text: "Side Kick",
    value: "Side Kick",
    className: "feet"
  },
  {
    key: "Round House Kick",
    text: "Round House Kick",
    value: "Round House Kick",
    className: "feet"
  },
  {
    key: "Back Turning Kick",
    text: "Back Turning Kick",
    value: "Back Turning Kick",
    className: "feet"
  },
  {
    key: "Spinning Heel Kick",
    text: "Spinning Heel Kick",
    value: "Spinning Heel Kick",
    className: "feet"
  },
  {
    key: "Inward Twist Kick",
    text: "Inward Twist Kick",
    value: "Inward Twist Kick",
    className: "feet"
  },
  { key: "Axe Kick", text: "Axe Kick", value: "Axe Kick", className: "feet" },
  {
    key: "Inside-to-Outside Cresent Kick",
    text: "Inside-to-Outside Cresent Kick",
    value: "Inside-to-Outside Cresent Kick",
    className: "feet"
  },
  {
    key: "Outside-to-InsideKick",
    text: "Outside-to-Inside Cresent Kick",
    value: "Outside-to-Inside Cresent Kick",
    className: "feet"
  }
];

const DropdownKickOptions = props => (
  <Dropdown
    className="feet"
    onChange={props.onChange}
    placeholder="Kicks"
    multiple
    selection
    options={kickOptions}
    clearable={true}
  />
);

export default DropdownKickOptions;
