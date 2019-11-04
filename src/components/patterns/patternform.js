import React, { Component } from "react";
import { createPattern } from "../../store/actions/patternActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../../index.css";

//CreatePattern is the form where a student creates a pattern
class CreatePattern extends Component {
  state = {
    title: "",
    content: [{ feet: {}, hands: {} }],
    selectedOption: ""
  };
  //alright so probably adding some CSS into state here...

  onSubmit = event => {
    //e.preventDefault();
    this.props.createPattern(this.state);
    this.props.history.push("/");
    alert(`Your ${this.state.title} pattern has been submitted.`);
  };

  onChange = event => {
    const newContent = [...this.state.content];
    console.log(event.target.id);
    console.log(event.target.value);
    console.log(this);
    event.preventDefault();
    if (event.target.id.includes("feet") || event.target.id.includes("hands")) {
      newContent[event.target.getAttribute("data-idx")][
        event.target.id.includes("feet") ? "feet" : "hands"
      ][event.target.id] = event.target.value;
      this.setState({
        content: newContent
          .sort((a, b) => a.key > b.key)
          .filter(newContent => {
            return newContent !== event.target.value;
          })
      });
    } else {
      this.setState({ title: event.target.value });
    }
  };
  //onRadio to handle the radio clicker. felt it best to keep it simple and seperate from onChange
  onRadio = event => {
    console.log(this);
    this.setState({
      selectedOption: event.target.value
    });
  };
  //I need addLine to RESET the selects, ADD a line in state. but NOT add a new line of selects.
  //then onChange needs to update the Current line Only
  addLine = event => {
    this.setState(prevState => ({
      content: [...prevState.content, { feet: {}, hands: {} }]
      
    }));
  };
//removeLine needs to remove ONLY the line it's called on.
//https://goshakkk.name/array-form-inputs/ basically the form needs to behave like this Super simple form but with selects....
  removeLine = (index, event) => {
    const content = Object.assign([], this.state.content);
    content.splice(index, 1);
    this.setState({ content: content });
  };

  render() {
    const { auth } = this.props;
    const { content } = this.state;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="field">
        <form onSubmit={this.onSubmit} className="grey lighten-4">
          <h5 className="grey-text text-darken-3">Create New Pattern</h5>
          <div className="input-field">
            <label htmlFor="title">Pattern Name</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>

          <div className="row">
            <label className="feet_label col s6 center-align">Feet</label>
            <label className="hands_label col s6 center-align">Hands</label>
          </div>


          {/*this field is the "draft" form above the selects */}
          <div className="field">
            {this.state.content.map((content, idx) => {
              return (
                <div>
                  <label className="number_label col s2">{`${idx + 1}`}</label>
                  <div key={idx} className="row line">
                    <div className="feet col s6 ">
                      {Object.keys(content.feet).map(key => {
                        return (
                          <div className="feet col s1.5 push-s1 left-align">
                            {content.feet[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="hands col s6 left-align">
                      {Object.keys(content.hands).map(key => {
                        return (
                          <div className="hands col s1.5 push-s3 left-align">
                            {content.hands[key]}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <hr className="with-break" />
                </div>
              );
            })}
          </div>
            {/*this row is the row of selects*/}
          <div className="row">
            {content.map((value, idx) => {
                <div key={idx}>
                  <br />
                  <div className="row">
                    <div className="row">
                      <div className="input-field col s.25">
                        <select
                          className="browser-default"
                          id="A_feet_lr"
                          data-idx={idx}
                          value={content[idx].feet.feet_lr}
                          onChange={this.onChange}
                        >
                          <option value="">L / R</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="B_feet_stances"
                          data-idx={idx}
                          value={content[idx].feet.feet_stances}
                          onChange={this.onChange}
                        >
                          <option value="">Stances</option>
                          <option value="maintain stance">
                            Maintain Stance
                          </option>
                          <option value="forward stance">Forward Stance</option>
                          <option value="back stance">Back Stance</option>
                          <option value="horse riding stance">
                            Horse Riding Stance
                          </option>
                          <option value="rear foot stance">
                            Rear Foot Stance
                          </option>
                          <option value="closed foot stance">
                            Closed Foot Stance
                          </option>
                          <option value="paralell stance">
                            Paralell Stance
                          </option>
                          <option value="crane stance">Crane Stance</option>
                          <option value="uneven stance">Uneven Stance</option>
                          <option value="tiger stance">Tiger Stance</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="C_feet_kicks"
                          data-idx={idx}
                          value={content[idx].feet.feet_kicks}
                          onChange={this.onChange}
                        >
                          <option value="">Kicks</option>
                          <optgroup label="Front Snap Kicks">
                            <option value="low section front snap kick">
                              Low Section Front Snap
                            </option>
                            <option value="high section front snap kick">
                              High Section Front Snap
                            </option>
                            <option value="jumping front snap kick">
                              Jumping Front Snap
                            </option>
                          </optgroup>
                          <optgroup label="Round House Kicks">
                            <option value="low section round house kick">
                              Low Section Round House
                            </option>
                            <option value="high section round house kick">
                              High Section Round House
                            </option>
                            <option value="jumping round house kick">
                              Jumping Round House
                            </option>
                          </optgroup>
                          <optgroup label="Axe Kicks">
                            <option value="axe kick">Axe</option>
                            <option value="jumping axe kick">
                              Jumping Axe
                            </option>
                          </optgroup>
                          <optgroup label="Back Turning kick">
                            <option value="back turning kick">
                              Back Turning
                            </option>
                            <option value="jumping back turning kick">
                              Jump Back Turning
                            </option>
                          </optgroup>
                          <optgroup label="Spinning Heel">
                            <option value="spinning heel kick">
                              Spinning Heel
                            </option>
                            <option value="jump spinning heel kick">
                              Jump Spinning Heel
                            </option>
                          </optgroup>
                          <optgroup label="Cresent Kicks">
                            <option value="inside to outside cresent kick">
                              Inside-to-Outside Cresent
                            </option>
                            <option value="spinning inside to outside cresent kick">
                              Spinning Inside-to-Outside Cresent
                            </option>
                            <option value="jump spinning inside to outside cresent kick">
                              Jump Spinning Inside-to-Outside Cresent
                            </option>
                            <option value="spinning outside to inside cresent kick">
                              Outside-to-Inside Cresent
                            </option>
                            <option value="jump spinning outside to inside cresent kick">
                              Jump spinning Outside-to-Inside Cresent
                            </option>
                          </optgroup>
                          <optgroup label="Twisting Kicks">
                            <option value="low section inward twisting kick">
                              Low Section Inward Twisting
                            </option>
                            <option value="high section inward twisting kick">
                              High Section Inward Twisting
                            </option>
                            <option value="jumping inward twisting">
                              Jumping Inward Twisting
                            </option>
                          </optgroup>
                        </select>
                      </div>

                      <div className="input-field col s.25">
                        <select
                          className="browser-default"
                          id="A_hands_lr"
                          data-idx={idx}
                          value={content[idx].hands.hands_lr}
                          onChange={this.onChange}
                        >
                          <option value="">L / R</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5 ">
                        <select
                          className="browser-default"
                          id="B_hands_blocks"
                          data-idx={idx}
                          value={content[idx].hands.hands_blocks}
                          onChange={this.onChange}
                        >
                          <option value="">Blocks</option>
                          <option value="down block">Down Block</option>
                          <option value="rising block">Rising Block</option>
                          <option value="outer forearm block">
                            Outer Forearm Block
                          </option>
                          <option value="inner forearm block">
                            Inner Forearm Block
                          </option>
                          <option value="inward hammer block">
                            Inward Hammer Block
                          </option>
                          <option value="reverse inward hammer block">
                            Reverse Inward Hammer Block
                          </option>
                          <option value="knifehand guarding block">
                            Knifehand Guarding Block
                          </option>
                          <option value="two arm block">Two Arm Block</option>
                          <option value="twin forearm block">
                            Twin Forearm Block
                          </option>
                          <option value="knifehand twin forearm block">
                            Knifehand Twin Forearm Block
                          </option>
                          <option value="wedging block">Wedging Block</option>
                          <option value="knifehand block">
                            Knifehand Block
                          </option>
                          <option value="inward knifehand block">
                            Inward Knifehand Block
                          </option>
                          <option value="reverse knifehand block">
                            Reverse Inward Knifehand Block
                          </option>
                          <option value="reverse circular block">
                            Reverse Circular Block
                          </option>
                          <option value="knifehand rising block">
                            Knifehand Rising Block
                          </option>
                          <option value="reverse knifehand rising block">
                            Reverse Knifehand Rising Block
                          </option>
                          <option value="x-pressing block">
                            X-Pressing Block
                          </option>
                          <option value="x-rising block">X-Rising Block</option>
                          <option value="knifehand hooking block">
                            Knifehand Hooking Block
                          </option>
                          <option value="pole block">Pole Block</option>
                          <option value="ridge hand block">
                            Ridge Hand Block
                          </option>
                          <option value="palm inward block">
                            Palm Inward Block
                          </option>
                          <option value="palm upward block">
                            Palm Upward Block
                          </option>
                          <option value="palm downward block">
                            Palm Downward Block
                          </option>
                          <option value="ridge hand guarding block">
                            Ridge Hand Guarding Block
                          </option>
                          <option value="w shape block">W Shape Block</option>
                          <option value="knifehand x rising block">
                            Knifehand X-Rising Block
                          </option>
                          <option value="outerforearm block/down block">
                            OuterForearm Block/Down Block
                          </option>
                          <option value="innerforearm block/down block">
                            InnerForearm Block/Down Block
                          </option>
                          <option value="cresent block">Cresent Block</option>
                        </select>
                      </div>
                      <div className="input-field col s.25">
                        <select
                          className="browser-default"
                          id="C_hands_attacks_lr"
                          data-idx={idx}
                          value={content[idx].hands.hands_lr}
                          onChange={this.onChange}
                        >
                          <option value="">L / R</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="D_hands_attacks"
                          data-idx={idx}
                          value={content[idx].hands.hands_attacks}
                          onChange={this.onChange}
                        >
                          <option value="">Attacks</option>
                          <optgroup label="Punches">
                            <option value="lunge punch">Lunge Punch</option>
                            <option value="reverse punch">
                              Reverse Lunge Punch
                            </option>
                            <option value="upset punch">
                              Twin Upset Punch
                            </option>
                            <option value="circular punch">
                              Circular Punch
                            </option>
                            <option value="middle knuckle">
                              Middle Knuckle
                            </option>
                            <option value="back knuckle">Back Knuckle</option>
                          </optgroup>
                          <optgroup label="Knifehand Strikes">
                            <option value="knifehand strike">
                              Knifehand Strike
                            </option>
                            <option value="knifehand strike">
                              Reverse Knifehand Strike
                            </option>
                            <option value="knifehand strike">
                              Inward Knifehand Strike
                            </option>
                            <option value="knifehand strike">
                              Reverse Inward Knifehand Strike
                            </option>
                            <option value="knifehand strike">
                              Downward Knifehand Strike
                            </option>
                            <option value="knifehand strike">
                              Back Hand Strike
                            </option>
                          </optgroup>
                          <optgroup label="Spear Fingers">
                            <option value="spearfinger">
                              Vertical Spearfinger
                            </option>
                            <option value="spearfinger">
                              Low Section Horizontal Spearfinger
                            </option>
                            <option value="spearfinger">
                              Reverse Low Section Horizontal Spearfinger
                            </option>
                            <option value="spearfinger">
                              High Section Horizontal Spearfinger
                            </option>
                            <option value="spearfinger">
                              Reverse High Section Horizontal Spearfinger
                            </option>
                          </optgroup>
                          <option value="back fist">Back Fist</option>
                          <optgroup label="Elbows">
                            <option value="elbow">
                              Horizontal Elbow - Unsupported
                            </option>
                            <option value="elbow">
                              Horizontal Elbow - Supported
                            </option>
                            <option value="elbow">
                              Horizontal Elbow - Grabbing
                            </option>
                            <option value="elbow">
                              Reverse Horizontal Elbow - Grabbing
                            </option>
                            <option value="elbow">Upward Elbow</option>
                            <option value="elbow">Reverse Upward Elbow</option>
                          </optgroup>
                          <optgroup label="Ridge Hands">
                            <option value="ridge hand">Ridge Hand</option>
                            <option value="ridge hand">
                              Reverse Ridge Hand
                            </option>
                          </optgroup>
                          <optgroup label="Hammer Fists">
                            <option value="hammer fist">
                              Downward Hammer Fist
                            </option>
                            <option value="hammer fist">
                              Side Hammer Fist
                            </option>
                          </optgroup>
                          <optgroup label="Arc Hands">
                            <option value="arc hand attack">
                              Arc Hand Attack
                            </option>
                            <option value="arc hand attack">
                              Reverse Arc Hand Attack
                            </option>
                            <option value="arc hand knee break">
                              Arc Hand Knee Break
                            </option>
                            <option value="arc hand knee break">
                              Reverse Arc Hand Knee Break
                            </option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
            })}
          </div>
          <div className="row">
            <button
              type="button"
              className="btn teal lighten-1 z-depth-3"
              onClick={this.addLine}
            >
              Add Line
            </button>
            <button
              type="button"
              className="btn teal lighten-1 z-depth-3"
              onClick={this.removeLine}
            >
              Remove Line
            </button>
          </div>
          <div className="radio">
            <p>
              <label>
                <input
                  className="with-gap"
                  name="group1"
                  type="radio"
                  value="Left foot returns to right"
                  checked={
                    this.state.selectedOption === "Left foot returns to right"
                  }
                  onChange={this.onRadio}
                />
                <span>Left foot to Right </span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="group1"
                  type="radio"
                  value="Right foot returns to left"
                  checked={
                    this.state.selectedOption === "Right foot returns to left"
                  }
                  onChange={this.onRadio}
                />
                <span>Right foot to left</span>
              </label>
            </p>
          </div>

          <div className="row">
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn teal lighten-1 z-depth-4 wave-effect waves-light right"
            >
              Submit Pattern
              <i className="material-icons right-align">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    content: state.pattern.content
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

// <label>Which foot returns</label>
//           <div className="row">
//             <button type="button" className="btn teal lighten-1 z-depth-3">
//               Left to Right
//             </button>
//             <button type="button" className="btn teal lighten-1 z-depth-3">
//               Right to Left
//             </button>
//           </div>

//Feet Extras

/* <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="B_feet_extras"
                          data-idx={idx}
                          value={content[idx].feet.feet_extras}
                          onChange={this.onChange}
                        >
                          <option value="">Feet Extras</option>
                          <option value="high section">High Section</option>
                          <option value="low section">Low Section</option>
                          <option value="jumping">Jumping</option>
                        </select>
                      </div> */
