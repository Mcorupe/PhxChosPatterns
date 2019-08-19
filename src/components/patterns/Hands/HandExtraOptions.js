import React from "react";

const extraOptions = [
  { key: "Left", text: "Left", value: "Left", className: "hand" },
  { key: "Right", text: "Right", value: "Right", className: "hand" },
  { key: "Lunge", text: "Lunge", value: "Lunge", className: "hand" },
  {
    key: "Maintain",
    text: "Maintain Hands",
    value: "Maintain",
    className: "hand"
  },
  { key: "Reverse", text: "Reverse", value: "Reverse", className: "hand" },
  { key: "Twin", text: "Twin", value: "Twin", className: "hand" },
  { key: "Double", text: "Double", value: "Double", className: "hand" },
  { key: "Inward", text: "Inward", value: "Inward", className: "hand" },
  { key: "Downward", text: "Downward", value: "Downward", className: "hand" },
  { key: "Side-way", text: "Side-way", value: "Side-way", className: "hand" },
  {
    key: "Horizontal",
    text: "Horizontal",
    value: "Horizontal",
    className: "hand"
  },
  { key: "Vertical", text: "Vertical", value: "Vertical", className: "hand" },
  {
    key: "Supported",
    text: "Supported",
    value: "Supported",
    className: "hand"
  },
  {
    key: "Unsupported",
    text: "Unsupported",
    value: "Unsupported",
    className: "hand"
  },
  { key: "Side", text: "Side", value: "Side", className: "hand" },
  {
    key: "Simultaneously",
    text: "Simultaneously",
    value: "Simultaneously",
    className: "hand"
  }
];

const SelectHandExtraOptions = props => (
  <select placeholder="Extras" multiple options={extraOptions} />
);

export default SelectHandExtraOptions;
