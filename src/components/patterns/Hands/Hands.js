import React from "react";
import SelectBlockOptions from "./BlockOptions";
import SelectAttackOptions from "./AttackOptions";
import SelectHandExtraOptions from "./HandExtraOptions";

class Hands extends React.Component {
  render() {
    return (
      <div>
        <label>Hands</label>
        <SelectHandExtraOptions className="hands" onChange={this.props.onChange} />
        <SelectBlockOptions className="hands" onChange={this.props.onChange} />
        <SelectAttackOptions className="hands" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Hands;
