import React from "react";
import SelectStanceOptions from "./StanceOptions";
import SelectKickOptions from "./KickOptions";
import SelectFeetExtraOptions from "./FeetExtraOptions";

class Feet extends React.Component {
  render() {
    return (
      <div>
        <label>Feet</label>
        <SelectFeetExtraOptions className="feet" onChange={this.props.onChange}/>
        <SelectStanceOptions className="feet" onChange={this.props.onChange} />
        <SelectKickOptions className="feet" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Feet;
