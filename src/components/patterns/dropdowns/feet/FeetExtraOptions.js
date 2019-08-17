import React from 'react'
import { Dropdown } from "semantic-ui-react";
//going to remove Semantic


const extraOptions = [
    { key: "Left", text: "Left", value: "Left", className:'feet' },
    { key: "Right", text: "Right", value: "Right", className: "feet" },
    { key: "High", text: "High Section", value: "High Section", className: "feet" },
    { key: "Low", text: "Low Section", value: "Low Section", className: "feet" },
    { key: "Maintain", text: "Maintain Stance", value: "Maintain Stance", className: "feet" },
    { key: "Jumping", text: "Jumping", value: "Jumpin", className: "feet" }
  ];

const DropdownFeetExtraOptions = (props) => (
    <Dropdown
      onChange={props.onChange}
      placeholder="Extras"
      multiple
      selection
      options={extraOptions}
      clearable={true}
    />
  );
  
  export default DropdownFeetExtraOptions;
  