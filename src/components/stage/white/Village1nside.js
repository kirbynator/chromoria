import React from "react";
import StoredURL from '../../../media/white/lifeStored.jpg'
import FloorW from "../../../media/white/Village1FloorW.png"
import FloorR from "../../../media/red/Village1FloorR.png"

class Village1nside extends React.Component {
  state = { dia: 0, hjk: false, dia: 0 };

  house3text() {
    switch (this.state.dia) {
      case 0:
          return "My friend heard something land out in the fields and went to invistigate.";
          break;
      case 1:
        return "My friend beat you in a game of memory, huh? They are the worst in the village..."
        break;
      case 2:
        return "Thanks for the victory! But please don't tell anyone about our trade..."
        break;
      case 3:
        return "Hopefully the Village Elder didn't bore you, I appreciate you talking to them for me."
        break;
    }
  }

  text() {
    if (this.props.color.started < 3) {
      switch (this.state.dia) {
        case 0:
          return "Hello I am the village elder";
          break;
        case 1:
          return "That is a particular stone you have there, would you like to find out more about it?";
          break;
        case 2:
          return "There is a legends of different color stones, each with their own emotion tied to it";
          break;
        case 3:
          return "These stones, when placed in the chroma temple, allow the people of this land to have feelings";
          break;
        case 4:
          return "The stone you hold is the white stone of courage";
          break;
        case 5:
          return "The fact you are holding it alludes to the stones being removed from the temple";
          break;
        case 6:
          return "That is a disturbing thought...";
          break;
        case 7:
          return "Anyways thank you for taking your time to talk to me";
          break;
        case 8:
          return "Knowing you are out there with this powers fills me with courage";
          break;
        case 9:
          return "*The white stone glows brighter*";
          break;
        case 10:
          this.props.loader("village1nside", {
            maxLife: this.props.color.maxLife + 1,
            life: this.props.color.life + 1
          });
          this.setState({ dia: 11 });
          break;
        case 11:
          return "*Your max health increased!*";
          break;
        case 12:
          this.setState({ dia: 14 });
          break;
        case 13:
          return "Well that's kind of rude";
          break;
        case 14:
          this.setState({ hjk: false });
          this.props.loader("village1nside", { started: 3 });
      }
    } else {
      return "Everyone can do with a little more courage";
    }
  }

  button() {
    if (this.props.color.started < 3) {
      if (this.state.dia === 1) {
        return (
          <div>
            <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
              <b>Yes</b>
            </button>
            <button onClick={() => this.setState({ dia: 13 })}>
              <b>No</b>
            </button>
          </div>
        );
      } else {
        return (
          <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
            <b>></b>
          </button>
        );
      }
    } else if (this.props.color.started > 2 && this.state.hjk) {
      return <div style={{ height: "19px" }}></div>;
    }
  }

  mememe() {
    if (this.state.meme) {
      return (
        <div>
          <p
            style={{
              height: "40px",
              position: "relative",
              zIndex: "2",
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid"
            }}
          >
            {this.props.color.temp == 1 ? "I got my favorite meme turned into a throw rug!" : "In this land, accepting to deliver a letter is legaly binding"}
          </p>
        </div>
      );
    }
  }

  bubble() {
    if (this.state.hjk || this.props.color.started < 3 && this.props.color.temp == 2) {
      return (
        <div>
          <p
            style={{
              height: "40px",
              position: "relative",
              zIndex: "2",
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid"
            }}
          >
            {this.props.color.temp == 3 ? this.house3text() : this.text()}
          </p>
          {this.button()}
        </div>
      );
    } else {
      return <div style={{ height: "81px" }}></div>;
    }
  }

  build(b) {
    const y = window.innerWidth / 2;
    switch (b) {
      case 1:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            {this.mememe()}
            <img
              onMouseEnter={() => this.props.loader("village1")}
              style={{ top: "160px", position: "absolute" }}
              src="https://piskel-imgstore-b.appspot.com/img/91aef270-5b63-11ea-b28d-e9c455d1a893.gif"
            ></img>
            <img
              style={{
                position: "absolute",
                left: `${y - 128}px`,
                top: "160px",
                width: "256px",
                height: "256px"
              }}
              src={StoredURL}
            />
            <img
              onMouseEnter={() => this.setState({ meme: true })}
              onMouseLeave={() => this.setState({ meme: false })}
              style={{
                top: "256px",
                position: "absolute",
                left: `${y - 192}px`,
                width: "18px",
                height: "18px"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>
          </div>
        );
        break;
      case 2:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            {this.props.color.started > 5 && this.mememe()}
            {this.bubble()}
            <img
              onMouseEnter={() => this.props.loader("village1")}
              style={{ top: "332px", left: `${y+223}px`, position: "absolute" }}
              src="https://piskel-imgstore-b.appspot.com/img/91aef270-5b63-11ea-b28d-e9c455d1a893.gif"
            ></img>

            <img
              onMouseEnter={
                this.props.color.started > 2
                  ? () => this.setState({ hjk: true })
                  : null
              }
              onMouseLeave={
                this.props.color.started > 2
                  ? () => this.setState({ hjk: false })
                  : null
              }
              style={{
                top: "200px",
                position: "absolute",
                left: `${y-64}px`,
                width: "18px",
                height: "18px",
                zIndex: "2"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>
            {this.props.color.started > 5 && <img
              onMouseEnter={ () => this.setState({ meme: true }) }
              onMouseLeave={ () => this.setState({ meme: false })}
              style={{
                top: "330px",
                position: "absolute",
                left: `${y+86}px`,
                width: "18px",
                height: "18px",
                zIndex: "2"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>}
            <div
              style={{
                position: "absolute",
                left: `${y - 128}px`,
                top: "160px",
                width: "256px",
                height: "256px",
                background: this.props.color.started > 4 ? "#228b22" : "#fff"
              }}
            />
          </div>
        );
        break;
      case 3:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            {this.bubble()}
            <img
              onMouseEnter={() => this.props.loader("village1")}
              style={{ top: "490px", position: "absolute" }}
              src="https://piskel-imgstore-b.appspot.com/img/91aef270-5b63-11ea-b28d-e9c455d1a893.gif"
            ></img>
            <img
              onMouseEnter={ () => this.setState({ hjk: true, dia: this.props.color.started > 4 ? 1 : 0 }) }
              onMouseLeave={ () => this.setState({ hjk: false })}
              style={{
                top: "375px",
                position: "absolute",
                left: `${y+148}px`,
                width: "18px",
                height: "18px",
                zIndex: "2"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>
            {this.props.color.started > 2 && <img
              onMouseEnter={ () => this.setState({ hjk: true, dia: 3 }) }
              onMouseLeave={ () => this.setState({ hjk: false })}
              style={{
                top: "315px",
                position: "absolute",
                left: `${y-208}px`,
                width: "18px",
                height: "18px",
                zIndex: "2"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>}
            {this.props.color.started > 4 && <img
              onMouseEnter={ () => this.setState({ hjk: true, dia: 2 }) }
              onMouseLeave={ () => this.setState({ hjk: false })}
              style={{ width: "18px", height: "18px", position: "absolute", left: `${y - 128}px`, top: "111px", }}
              src="https://imgur.com/lSr15pW.png"
            />}
            <div
              style={{
                position: "absolute",
                left: `${y - 128}px`,
                top: "160px",
                width: "256px",
                height: "256px",
                background: this.props.color.started > 4 ? "#0f0" : "#fff"
              }}
            />
          </div>
        );
        break;
    }
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          backgroundImage:
            `url("${this.props.color.started > 111 ? FloorR : FloorW}")`
        }}
      >
        {this.build(this.props.color.temp || 2)}
      </div>
    );
  }
}
export default Village1nside;
