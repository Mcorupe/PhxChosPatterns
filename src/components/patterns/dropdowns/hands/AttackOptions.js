import React from "react";
import { Dropdown } from "semantic-ui-react";
//going to remove Semantic

const attackOptions = [
  { key: "Punch", text: "Punch", value: "Punch", className: "hand" },
  {
    key: "Knifehand",
    text: "Knifehand Strike",
    value: "Knifehand Strike",
    className: "hand"
  },
  {
    key: "Spearfinger",
    text: "Spearfinger Attack",
    value: "Spearfinger Attack",
    className: "hand"
  },
  {
    key: "Elbow",
    text: "Elbow Attack",
    value: "Elbow Attack",
    className: "hand"
  },
  {
    key: "Hammer Fist",
    text: "Hammer Fist",
    value: "Hammer Fist",
    className: "hand"
  },
  {
    key: "Ridge hand",
    text: "Ridge Hand Strike",
    value: "Ridge Hand Strike",
    className: "hand"
  },
  {
    key: "Back Knuckle",
    text: "Back Knuckle",
    value: "Back Knuckle",
    className: "hand"
  },
  {
    key: "Back Fist",
    text: "Back Fist",
    value: "Back Fist",
    className: "hand"
  },
  {
    key: "Upset",
    text: "Upset Punch",
    value: "Upset Punch",
    className: "hand"
  },
  {
    key: "Arc Hand Attack",
    text: "Arc Hand Attack",
    value: "Arc Hand Attack",
    className: "hand"
  },
  {
    key: "Arc Hand Knee Break",
    text: "Arc Hand Knee Break",
    value: "Arc Hand Knee Break",
    className: "hand"
  },
  {
    key: "Circular Punch",
    text: "Circular Punch",
    value: "Circular Punch",
    className: "hand"
  },
  {
    key: "Middle Knuckle",
    text: "Middle Knuckle",
    value: " Middle Knuckle",
    className: "hand"
  }
];

const DropdownAttackOptions = props => (
  <Dropdown
    onChange={props.onChange}
    placeholder="Attacks"
    multiple
    selection
    options={attackOptions}
    clearable={true}
  />
);

export default DropdownAttackOptions;
