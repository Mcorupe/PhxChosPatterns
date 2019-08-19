import React from "react";

const blockOptions = [
  {
    key: "Inner Forearm Block",
    text: "Inner Forearm Block",
    value: "Inner Forearm Block",
    className: "hand"
  },
  {
    key: "Outer Forearm Block",
    text: "Outer Forearm Block",
    value: "Outer Forearm Block",
    className: "hand"
  },
  {
    key: "Knife Hand Block",
    text: "Knife Hand Block",
    value: "Knife Hand Block",
    className: "hand"
  },
  {
    key: "Rising Block",
    text: "Rising Block",
    value: "Rising Block",
    className: "hand"
  },
  {
    key: "Down Block",
    text: "Down Block",
    value: "Down Block",
    className: "hand"
  },
  {
    key: "Hammer Block",
    text: "Hammer Block",
    value: "Hammer Block",
    className: "hand"
  },
  {
    key: "Twin Forearm Block",
    text: "Twin Forearm Block",
    value: "Twin Forearm Block",
    className: "hand"
  },
  {
    key: "Twin Knifehand Forearm Block",
    text: "Twin Knifehand Forearm Block",
    value: "Twin Knifehand Forearm Block",
    className: "hand"
  },
  {
    key: "Two Arm Block",
    text: "Two Arm Block",
    value: "Two Arm Block",
    className: "hand"
  },
  {
    key: "Knifehand Guarding Block",
    text: "Knifehand Guarding Block",
    value: "Knifehand Guarding Block",
    className: "hand"
  },
  {
    key: "Ridge Hand Block",
    text: "Ridge Hand Guarding Block",
    value: "Ridge Hand Guarding Block",
    className: "hand"
  },
  {
    key: "Wedging Block",
    text: "Wedging Block",
    value: "Wedging Block",
    className: "hand"
  },
  {
    key: "Knifehand Hooking Block",
    text: "Knifehand Hooking Block",
    value: "Knifehand Hooking Block",
    className: "hand"
  },
  {
    key: "X-Pressing Block",
    text: "X-Pressing Block",
    value: "X-Pressing Block",
    className: "hand"
  },
  {
    key: "X-Rising Block",
    text: " X-Rising Block",
    value: " X-Rising Block",
    className: "hand"
  },
  {
    key: "Knifehand X-Rising Block",
    text: "Knifehand X-Rising Block",
    value: "Knifehand X-Rising Block",
    className: "hand"
  },
  {
    key: "Inner Forearm Block/Down Block",
    text: "Inner Forearm Block/Down Block",
    value: " Inner Forearm Block/Down Block",
    className: "hand"
  },
  {
    key: "Outer Forearm Block/Down Block",
    text: "Outer Forearm Block/Down Block",
    value: "Outer Forearm Block/Down Block",
    className: "hand"
  },
  {
    key: "Cresent Block",
    text: "Cresent Block",
    value: "Cresent Block",
    className: "hand"
  },
  {
    key: "Cresent Kick Block",
    text: "Cresent Kick Block",
    value: "Cresent Kick Block",
    className: "hand"
  },
  {
    key: "W Shape Block",
    text: " 'W' Shape Block",
    value: " 'W' Shape Block",
    className: "hand"
  },
  {
    key: "Circular Block",
    text: "Circular Block",
    value: "Circular Block",
    className: "hand"
  }
];

const SelectBlockOptions = props => (
  <select placeholder="Blocks" multiple options={blockOptions} />
);

export default SelectBlockOptions;
