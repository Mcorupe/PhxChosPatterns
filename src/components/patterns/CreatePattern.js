import React, { Component } from "react";
import { createPattern } from "../../store/actions/patternActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreatePattern extends Component {
  state = {
    title: "",
    line: [{ feet: "", hands: "" }]
  };

    onSubmit = e => {
    //e.preventDefault();
    this.props.createPattern(this.state);
    this.props.history.push("/");
  };

  onChange = (event, newLine) => {
    if (["feet", "hands"].includes(event.currentTarget.className)) {
      let line = [...this.state.line];
      line[event.target.id][event.target.className] = event.target.value;
      this.setState({ line }, () =>
        console.log(this.state.line, "the onChange was triggered")
      );
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  addLine = event => {
    event.preventDefault();
    this.setState(prevState => ({
      line: [...prevState.line, { feet: "", hands: "" }]
    }));
    console.log(this.state.line, "addLine was triggered");
  };

  removeLine = (index, event) => {
    event.preventDefault();
    const line = Object.assign([], this.state.line);
    line.splice(index, 1);
    this.setState({ line: line });
    console.log(this.state.line, "the RemoveLine");
  };

  render() {
    const { auth } = this.props;
    const { line } = this.state;
    //so.. im passing stateToProps is this line = this.state stupid?
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.state + "this.state");
    console.log(this.props + "this.props");
    return (
      <div className="field">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Pattern</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>
          <button type="button" className="btn teal lighten-1 z-depth-2" onClick={this.addLine}>Add Line </button>
          <button type="button" className="btn teal lighten-1 z-depth-2" onClick={this.removeLine}>Remove Line</button>
          <hr />
          <div className="row">
            {line.map((value, idx) => {
              return (
                <div key={idx}>
                  <label> {`${idx + 1}`}</label>
                  <br />
                  <div className="row">
                    <div className="row">
                      <div className="feet-LR col s.25">
                        <select className="browser-default" defaultValue="default"><option value="default">L / R</option>
                          <option value="1">Left</option>
                          <option value="2">Right</option>
                        </select>
                      </div>
                      <div className="feet-extras col s1.5">
                        <select className="browser-default" defaultValue="default">
                          <option value="default">Feet Extras</option>
                          <option value="1">High Section</option>
                          <option value="2">Low Section</option>
                          <option value="3">Jumping</option>
                        </select>
                      </div>
                      <div className="feet-stances col s1.5">
                        <select className="browser-default" defaultValue="default">
                          <option value="default">Stances</option>
                          <option value="1">Maintain Stance</option>
                          <option value="2">Forward Stance</option>
                          <option value="3">Back Stance</option>
                          <option value="4">Horse Riding Stance</option>
                          <option value="5">Rear Foot Stance</option>
                          <option value="6">Closed Foot Stance</option>
                          <option value="7">Paralell Stance</option>
                          <option value="8">Crane Stance</option>
                          <option value="9">Uneven Stance</option>
                          <option value="10">Tiger Stance</option>
                        </select>
                      </div>
                      <div className="feet-kicks col s1.5">
                        <select  className="browser-default" defaultValue="default">
                          <option value="default">Kicks</option>
                          <option value="1">Front Snap</option>
                          <option value="2">Side</option>
                          <option value="3">Round House</option>
                          <option value="4">Back Turning</option>
                          <option value="5">Spinning Heel</option>
                          <option value="6">Inside-to-Outside Cresent</option>
                          <option value="7">Outside-to-Inside Cresent</option>
                          <option value="8">Axe</option>
                          <option value="9">Inward Twisting</option>
                        </select>
                      </div>
                      <div className="hands-LR col s.25">
                        <select className="browser-default" defaultValue="default">
                          <option value="default">L / R</option>
                          <option value="1">Left</option>
                          <option value="2">Right</option>
                        </select>
                      </div>
                      <div className="hands-extras col s1.5">
                        <select className="browser-default" defaultValue="default">
                          <option value="default">Hand Extras</option>
                          <option value="1">Maintain Hands</option>
                          <option value="2">Reverse</option>
                          <option value="3">Lunge</option>
                          <option value="4">Twin</option>
                          <option value="5">Double</option>
                          <option value="6">Inward</option>
                          <option value="7">Upward</option>
                          <option value="8">Downward</option>
                          <option value="9">Side-way</option>
                          <option value="10">Horizontal</option>
                          <option value="11">Verticle</option>
                          <option value="12">Supported</option>
                          <option value="13">Unsupported</option>
                          <option value="14">Side</option>
                        </select>
                      </div>
                      <div className="hands-blocks col s1.5">
                        <select className="browser-default" defaultValue="default">
                          <option value="default" disabled>
                            Blocks
                          </option>
                          <optgroup label="White Belt">
                            <option value="1">Down Block</option>
                            <option value="2">Rising Block</option>
                            <option value="3">Outer Forearm Block</option>
                            <option value="4">Inner Forearm Block</option>
                            <option value="5">Hammer Block</option>
                            <option value="6">Knifehand Guarding Block</option>
                          </optgroup>
                          <optgroup label="Yellow Belt">
                            <option value="7">Two Arm Block</option>
                            <option value="8">Twin Forearm Block</option>
                          </optgroup>
                          <optgroup label="Orange Belt">
                            <option value="9">Wedging Block</option>
                            <option value="10">Knifehand Block</option>
                          </optgroup>
                          <optgroup label="Green Belt">
                            <option value="11">Reverse Circular Block</option>
                            <option value="12">Knifehand Rising Block</option>
                          </optgroup>
                          <optgroup label="Blue Belt">
                            <option value="8">
                              Twin Knifehand Forearm Block
                            </option>
                            <option value="">X-Pressing Block</option>
                            <option value="">X-Rising Block</option>
                            <option value="">Knifehand Hooking Block</option>
                          </optgroup>
                          <optgroup label="Purple Belt">
                            <option value="">Pole Block</option>
                            <option value="">Ridge Hand Block</option>
                            <option value="">Palm Inward Block</option>
                            <option value="">Palm Upward Block</option>
                          </optgroup>
                          <optgroup label="Brown Belt">
                            <option value="">Palm Downward Block</option>
                            <option value="">Ridge Hand Guarding Block</option>
                            <option value="">W Shape Block</option>
                          </optgroup>
                          <optgroup label="Red Belt">
                            <option value="">Knifehand X-Rising Block</option>
                            <option value="">OuterForearm Block/Down Block</option>
                            <option value="">InnerForearm Block/Down Block</option>
                          </optgroup>
                          <optgroup label="Black Belt">
                            <option value="">Cresent Block</option>
                          </optgroup>                         
                        </select>
                      </div>
                      <div className="hands-attacks col s1.5">
                        <select className="browser-default" defaultValue="default">
                          <option value="default">Attacks</option>
                          <optgroup label="White Belt">
                            <option value="1">Punch</option>
                          </optgroup>
                          <optgroup label="Yellow Belt">
                            <option value="7">Back Fist</option>
                            <option value="2">Knifehand Strike</option>
                          </optgroup>
                          <optgroup label="Orange Belt">
                            <option value="3">Spearfinger</option>
                            <option value="8">Upset Punch</option>
                          </optgroup>
                          <optgroup label="Green Belt" />
                          <option value="4">Elbow</option>
                          <optgroup label="Blue Belt">
                            <option value="5">Hamer Fist</option>
                          </optgroup>
                          <optgroup label="Purple Belt">
                            <option value="11">Circular Punch</option>
                          </optgroup>
                          <optgroup label="Brown Belt" />
                          <option value="6">Ridge Hand</option>
                          <optgroup label="Red Belt">
                            <option value="9">Arc Hand Attack</option>
                            <option value="10">Arc Hand Knee Break</option>
                          </optgroup>
                          <optgroup label="Black Belt" />
                          <option value="12">Middle Knuckle</option>
                          <option value="13">Back Knuckle</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="row">
            <button type="button" className="btn teal lighten-1 z-depth-2" onClick={this.addLine}>Add Line</button>
            <button type="button" className="btn teal lighten-1 z-depth-2" onClick={this.removeLine}>Remove Line</button>
          </div>
          <button type="button" onClick={this.onSubmit} className="btn teal lighten-1 z-depth-2 offset-s6">Create</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    line: state.pattern.line
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createPattern: pattern => dispatch(createPattern(pattern))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePattern);

/*

      <div className="field">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Pattern</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>

          <div className="row">
            <div className="input-field col s.25">
              <select className="browser-default" defaultValue="default">
                <option value="default">L / R</option>
                <option value="1">Left</option>
                <option value="2">Right</option>
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default">Feet Extras</option>
                <option value="1">High Section</option>
                <option value="2">Low Section</option>
                <option value="3">Jumping</option>
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default">Stances</option>
                <option value="1">Maintain Stance</option>
                <option value="2">Forward Stance</option>
                <option value="3">Back Stance</option>
                <option value="4">Horse Riding Stance</option>
                <option value="5">Rear Foot Stance</option>
                <option value="6">Closed Foot Stance</option>
                <option value="7">Paralell Stance</option>
                <option value="8">Crane Stance</option>
                <option value="9">Uneven Stance</option>
                <option value="10">Tiger Stance</option>
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default">Kicks</option>
                <option value="1">Front Snap</option>
                <option value="2">Side</option>
                <option value="3">Round House</option>
                <option value="4">Back Turning</option>
                <option value="5">Spinning Heel</option>
                <option value="6">Inside-to-Outside Cresent</option>
                <option value="7">Outside-to-Inside Cresent</option>
                <option value="8">Axe</option>
                <option value="9">Inward Twisting</option>
              </select>
            </div>
            <div className="input-field col s.25">
              <select className="browser-default" defaultValue="default">
                <option value="default">L / R</option>
                <option value="1">Left</option>
                <option value="2">Right</option>
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default">Hand Extras</option>
                <option value="1">Maintain Hands</option>
                <option value="2">Reverse</option>
                <option value="3">Lunge</option>
                <option value="4">Twin</option>
                <option value="5">Double</option>
                <option value="6">Inward</option>
                <option value="7">Upward</option>
                <option value="8">Downward</option>
                <option value="9">Side-way</option>
                <option value="10">Horizontal</option>
                <option value="11">Verticle</option>
                <option value="12">Supported</option>
                <option value="13">Unsupported</option>
                <option value="14">Side</option>
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default" disabled>
                  Blocks
                </option>
                <optgroup label="White Belt">
                  <option value="1">Down Block</option>
                  <option value="2">Rising Block</option>
                  <option value="3">Outer Forearm Block</option>
                  <option value="4">Inner Forearm Block</option>
                  <option value="5">Hammer Block</option>
                  <option value="6">Knifehand Guarding Block</option>
                </optgroup>
                <optgroup label="Yellow Belt">
                  <option value="7">Two Arm Block</option>
                  <option value="8">Twin Forearm Block</option>
                </optgroup>
                <optgroup label="Orange Belt">
                  <option value="9">Wedging Block</option>
                  <option value="10">Knifehand Block</option>
                </optgroup>
                <optgroup label="Green Belt">
                  <option value="11">Reverse Circular Block</option>
                  <option value="12">Knifehand Rising Block</option>
                </optgroup>
                <optgroup label="Blue Belt">
                  <option value="8">Twin Knifehand Forearm Block</option>
                  <option value="">X-Pressing Block</option>
                  <option value="">X-Rising Block</option>
                  <option value="">Knifehand Hooking Block</option>
                </optgroup>
                <optgroup label="Purple Belt">
                  <option value="">Pole Block</option>
                  <option value="">Ridge Hand Block</option>
                  <option value="">Palm Inward Block</option>
                  <option value="">Palm Upward Block</option>
                </optgroup>
                <optgroup label="Brown Belt">
                  <option value="">Palm Downward Block</option>
                  <option value="">Ridge Hand Guarding Block</option>
                  <option value="">W Shape Block</option>
                </optgroup>
                <optgroup label="Red Belt">
                  <option value="">Knifehand X-Rising Block</option>
                  <option value="">OuterForearm Block/Down Block</option>
                  <option value="">InnerForearm Block/Down Block</option>
                </optgroup>
                <optgroup label="Black Belt">
                  <option value="">Cresent Block</option>
                </optgroup>

                <option value="" />
              </select>
            </div>
            <div className="input-field col s1.5">
              <select className="browser-default" defaultValue="default">
                <option value="default">Attacks</option>
                <optgroup label="White Belt">
                  <option value="1">Punch</option>
                </optgroup>
                <optgroup label="Yellow Belt">
                  <option value="7">Back Fist</option>
                  <option value="2">Knifehand Strike</option>
                </optgroup>
                <optgroup label="Orange Belt">
                  <option value="3">Spearfinger</option>
                  <option value="8">Upset Punch</option>
                </optgroup>
                <optgroup label="Green Belt" />
                <option value="4">Elbow</option>
                <optgroup label="Blue Belt">
                  <option value="5">Hamer Fist</option>
                </optgroup>
                <optgroup label="Purple Belt">
                  <option value="11">Circular Punch</option>
                </optgroup>
                <optgroup label="Brown Belt" />
                <option value="6">Ridge Hand</option>
                <optgroup label="Red Belt">
                  <option value="9">Arc Hand Attack</option>
                  <option value="10">Arc Hand Knee Break</option>
                </optgroup>
                <optgroup label="Black Belt" />
                <option value="12">Middle Knuckle</option>
                <option value="13">Back Knuckle</option>
              </select>
            </div>
          </div>

          <div className="input-field">
            <button className="btn teal lighten-1 z-depth-0">Create</button>
            <button
              className="btn teal lighten-1 z-depth=0"
              onClick={this.addLine}
            >
              Add Line
            </button>
            <button
              className="btn teal lighten-1 z-depth=0"
              onClick={this.removeLine}
            >
              Remove Line
            </button>
          </div>
        </form>
      </div>
*/
