import React from "react";
import DropdownBlockOptions from "./BlockOptions";
import DropdownAttackOptions from "./AttackOptions";
import DropdownHandExtraOptions from "./HandExtraOptions";
//import "../../../App.css";

class Hands extends React.Component {
  render() {
   // console.log(this, "'this' in hands.js")
    return (
      <div>
        <label>Hands</label>
        <br />
        <br />
        <DropdownHandExtraOptions
          className="hands"
          onChange={this.props.onChange}
        />
        <DropdownBlockOptions
          className="hands"
          onChange={this.props.onChange}
        />
        <DropdownAttackOptions
          className="hands"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Hands;
