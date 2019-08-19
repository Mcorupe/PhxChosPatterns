import React from "react";

const extraOptions = [
  { key: "Left", text: "Left", value: "Left", className: "feet" },
  { key: "Right", text: "Right", value: "Right", className: "feet" },
  {
    key: "High",
    text: "High Section",
    value: "High Section",
    className: "feet"
  },
  { key: "Low", text: "Low Section", value: "Low Section", className: "feet" },
  {
    key: "Maintain",
    text: "Maintain Stance",
    value: "Maintain Stance",
    className: "feet"
  },
  { key: "Jumping", text: "Jumping", value: "Jumpin", className: "feet" }
];

const SelectFeetExtraOptions = props => (
  <select
    onChange={props.onChange}
    multiple
    placeholder="Extras"
    options={extraOptions}
  />
);

export default SelectFeetExtraOptions;
