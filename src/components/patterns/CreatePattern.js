import React, { Component } from "react";
import { createPattern } from "../../store/actions/patternActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreatePattern extends Component {
  state = {
    title: "",
    content: [{ feet: {}, hands: {} }]
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createPattern(this.state);
    this.props.history.push("/");
    console.log(this.state);
    alert(`Your ${this.state.title} pattern has been submitted.`);
  };

  onChange = event => {
    console.log(this);
    console.log(event.target);
    // console.log(event.target.id.includes("feet"), "feet")
    // console.log(event.target.id.includes("hands"), "hands")
    console.log(event.target.id.includes("feet") || (event.target.id.includes("hands")))
    const newContent = [...this.state.content];
    if (event.target.id.includes("feet") || event.target.id.includes("hands")) {
      newContent[event.target.getAttribute("data-idx")][
        event.target.id.includes("feet") ? "feet" : "hands"
      ][event.target.id] = event.target.value;
      this.setState({ content: newContent });
    } else {
      this.setState({ title: event.target.value });
    }
  };

  addLine = event => {
    this.setState(prevState => ({
      content: [...prevState.content, { feet: {}, hands: {} }]
    }));
    console.log(this.state.content, "addLine was triggered");
  };

  removeLine = (index, event) => {
    const content = Object.assign([], this.state.content);
    content.splice(index, 1);
    this.setState({ content: content });
    console.log(this.state.content, "the RemoveLine");
  };

  render() {
    const { auth } = this.props;
    const { content } = this.state;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="field">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Pattern</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>
          <button
            type="button"
            className="btn teal lighten-1 z-depth-2"
            onClick={this.addLine}
          >
            Add Line{" "}
          </button>
          <button
            type="button"
            className="btn teal lighten-1 z-depth-2"
            onClick={this.removeLine}
          >
            Remove Line
          </button>
          <hr />
          <div className="row">
            {content.map((value, idx) => {
              return (
                <div key={idx}>
                  <label> {`${idx + 1}`}</label>
                  <br />
                  <div className="row">
                    <div className="row">
                      <div className="input-field col s.25">
                        <select
                          className="browser-default"
                          id="feet_lr"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].feet.feet_lr}
                          onChange={this.onChange}
                        >
                          <option value="default">L / R</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="feet_extras"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].feet.feet_extras}
                          onChange={this.onChange}
                        >
                          <option value="default">Feet Extras</option>
                          <option value="high section">High Section</option>
                          <option value="low section">Low Section</option>
                          <option value="jumping">Jumping</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="feet_stances"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].feet.feet_stances}
                          onChange={this.onChange}
                        >
                          <option value="default">Stances</option>
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
                          id="feet_kicks"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].feet.feet_kicks}
                          onChange={this.onChange}
                        >
                          <option value="default">Kicks</option>
                          <option value="front snap">Front Snap</option>
                          <option value="side">Side</option>
                          <option value="round house">Round House</option>
                          <option value="back turning">Back Turning</option>
                          <option value="spinning heel">Spinning Heel</option>
                          <option value="inside to outside cresent">
                            Inside-to-Outside Cresent
                          </option>
                          <option value="outside to inside cresent">
                            Outside-to-Inside Cresent
                          </option>
                          <option value="axe">Axe</option>
                          <option value="inward twisting">
                            Inward Twisting
                          </option>
                        </select>
                      </div>
                      <div className="input-field col s.25">
                        <select
                          className="browser-default"
                          id="hands_lr"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].hands.hands_lr}
                          onChange={this.onChange}
                        >
                          <option value="default">L / R</option>
                          <option value="left">Left</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="hands_extras"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].hands.hands_extras}
                          onChange={this.onChange}
                        >
                          <option value="default">Hand Extras</option>
                          <option value="maintain hands">Maintain Hands</option>
                          <option value="reverse">Reverse</option>
                          <option value="lunge">Lunge</option>
                          <option value="twin">Twin</option>
                          <option value="double">Double</option>
                          <option value="inward">Inward</option>
                          <option value="upward">Upward</option>
                          <option value="downward">Downward</option>
                          <option value="sideway">Side-way</option>
                          <option value="horizontal">Horizontal</option>
                          <option value="verticle">Verticle</option>
                          <option value="supported">Supported</option>
                          <option value="unsupported">Unsupported</option>
                          <option value="side">Side</option>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="hands_blocks"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].hands.hands_blocks}
                          onChange={this.onChange}
                        >
                          <option value="default">Blocks</option>
                          <optgroup label="White Belt">
                            <option value="down block">Down Block</option>
                            <option value="rising block">Rising Block</option>
                            <option value="outer forearm block">
                              Outer Forearm Block
                            </option>
                            <option value="inner forearm block">
                              Inner Forearm Block
                            </option>
                            <option value="hammer block">Hammer Block</option>
                            <option value="knifehand guarding block">
                              Knifehand Guarding Block
                            </option>
                          </optgroup>
                          <optgroup label="Yellow Belt">
                            <option value="two arm block">Two Arm Block</option>
                            <option value="twin forearm block">
                              Twin Forearm Block
                            </option>
                          </optgroup>
                          <optgroup label="Orange Belt">
                            <option value="wedging block">Wedging Block</option>
                            <option value="knifehand block">
                              Knifehand Block
                            </option>
                          </optgroup>
                          <optgroup label="Green Belt">
                            <option value="reverse circular block">
                              Reverse Circular Block
                            </option>
                            <option value="knifehand rising block">
                              Knifehand Rising Block
                            </option>
                          </optgroup>
                          <optgroup label="Blue Belt">
                            <option value="twin knifehand forearm block">
                              Twin Knifehand Forearm Block
                            </option>
                            <option value="x pressing block">
                              X-Pressing Block
                            </option>
                            <option value="x rising block">
                              X-Rising Block
                            </option>
                            <option value="knifehand hooking block">
                              Knifehand Hooking Block
                            </option>
                          </optgroup>
                          <optgroup label="Purple Belt">
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
                          </optgroup>
                          <optgroup label="Brown Belt">
                            <option value="palm downward block">
                              Palm Downward Block
                            </option>
                            <option value="ridge hand guarding block">
                              Ridge Hand Guarding Block
                            </option>
                            <option value="w shape block">W Shape Block</option>
                          </optgroup>
                          <optgroup label="Red Belt">
                            <option value="knifehand x rising block">
                              Knifehand X-Rising Block
                            </option>
                            <option value="outerforearm block/down block">
                              OuterForearm Block/Down Block
                            </option>
                            <option value="innerforearm block/down block">
                              InnerForearm Block/Down Block
                            </option>
                          </optgroup>
                          <optgroup label="Black Belt">
                            <option value="cresent block">Cresent Block</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="input-field col s1.5">
                        <select
                          className="browser-default"
                          id="hands_attacks"
                          data-idx={idx}
                          defaultValue="default"
                          value={content[idx].hands.hands_attacks}
                          onChange={this.onChange}
                        >
                          <option value="default">Attacks</option>
                          <optgroup label="White Belt">
                            <option value="punch">Punch</option>
                          </optgroup>
                          <optgroup label="Yellow Belt">
                            <option value="back fist">Back Fist</option>
                            <option value="knifehand strike">
                              Knifehand Strike
                            </option>
                          </optgroup>
                          <optgroup label="Orange Belt">
                            <option value="spearfinger">Spearfinger</option>
                            <option value="upset punch">Upset Punch</option>
                          </optgroup>
                          <optgroup label="Green Belt" />
                          <option value="elbow">Elbow</option>
                          <optgroup label="Blue Belt">
                            <option value="hammer fist">Hamer Fist</option>
                          </optgroup>
                          <optgroup label="Purple Belt">
                            <option value="circular punch">
                              Circular Punch
                            </option>
                          </optgroup>
                          <optgroup label="Brown Belt" />
                          <option value="ridge hand">Ridge Hand</option>
                          <optgroup label="Red Belt">
                            <option value="arc hand attack">
                              Arc Hand Attack
                            </option>
                            <option value="arc hand knee break">
                              Arc Hand Knee Break
                            </option>
                          </optgroup>
                          <optgroup label="Black Belt" />
                          <option value="middle knuckle">Middle Knuckle</option>
                          <option value="back knuckle">Back Knuckle</option>
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
            <button
              type="button"
              className="btn teal lighten-1 z-depth-2"
              onClick={this.addLine}
            >
              Add Line
            </button>
            <button
              type="button"
              className="btn teal lighten-1 z-depth-2"
              onClick={this.removeLine}
            >
              Remove Line
            </button>
          </div>
          <button
            type="button"
            onClick={this.onSubmit}
            className="btn teal lighten-1 z-depth-2 offset-s6"
          >
            Create
          </button>
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

// onChange = (event, newLine) => {
//   if (["feet", "hands"].includes(event.currentTarget.content)) {
//     let content = [...this.state.content];
//     content[event.target.id][event.target.content] = event.target.value;
//     this.setState({ content }, () =>
//       console.log(this.state.content, "the onChange was triggered")
//     );
//   } else {
//     this.setState({ [event.target.name]: event.target.value });
//   }
// };

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
