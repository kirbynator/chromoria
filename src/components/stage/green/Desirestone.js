import React from "react";
import Battle from "../../battle/Memory";
import DesireStoneGif from "../../../media/green/desireStone.gif"
import OutsideG from  "../../../media/green/OutsideG.gif"


class DesireStone extends React.Component {
  state = { dia: 0, t: "460px", l: 100, battle: false };

  battle() {
    return (
      this.state.battle && <Battle drill={(win) => this.drill(win)}></Battle>
    );
  }

  drill = (win) => {
    if (win) {
      this.setState({ battle: false, dia: 7 });
    }
  };

  bubble() {
    if (
      (this.props.color.started < 4 &&
      this.state.dia !== 6 &&
      this.state.dia !== 17) ||
      this.state.dia > 19
    ) {
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
              borderStyle: "solid",
            }}
          >
            {this.text()}
          </p>
          {this.button()}
        </div>
      );
    } else {
      return <div style={{ height: "81px" }}></div>;
    }
  }

  button() {
    if (this.props.color.started < 4) {
      if (this.state.dia === 10) {
        return (
          <div>
            <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
              <b>Yes</b>
            </button>
            <button onClick={() => this.setState({ dia: 18 })}>
              <b>No</b>
            </button>
          </div>
        );
      } else if (this.state.dia <= 4 || this.state.dia >= 7 || this.state.dia === 20) {
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

  text() {
    switch (this.state.dia) {
      case 0:
        return "Well hello there";
        break;
      case 1:
        return "That's a nice white stone you have";
        break;
      case 2:
        return "It kinda looks like my green one";
        break;
      case 3:
        return "I want it";
        break;
      case 4:
        this.setState({ l: 208, t: "490px", dia: 5 });
        break;
      case 5:
        return "I have the sign and now you can't escape without confronting me!";
        break;
      case 7:
        return "You won!";
        break;
      case 8:
        return "But I wanted the victory...";
        break;
      case 9:
        return "I make you a deal, I'll trade you my stone for your victory.";
        break;
      case 10:
        return "How does that sound?";
        break;
      case 11:
        this.setState({ l: 0, t: 300, dia: 12 });
        break;
      case 12:
        return "Awesome! Ill leave my stone in the middle here...";
        break;
      case 13:
        this.setState({ l: 208, t: 490, dia: 14 });
        break;
      case 14:
        return "and I'll put the signpost back...";
        break;
      case 15:
        return "and I'll take your victory and head back to the village. Bye!";
        break;
      case 16:
        this.props.loader("desirestone", {
          started: this.props.color.started + 1,
        });
        this.setState({ dia: 17 });
        break;
      case 18:
        return "You will reconsiter my offer";
        break;
      case 19:
        this.setState({ dia: 10 });
        break;
      case 20:
      this.props.loader("desirestone", {
        started: this.props.color.started + 1
      })
      this.setState({ dia:21 })
      break;
      case 21:
        return "You pick up the green stone and are filled with desire."
      break
    }
  }
  render() {
    const y = window.innerWidth / 2;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "green",
          backgroundImage: `url('${OutsideG}')`,
        }}
      >
        {this.bubble()}
        {this.props.color.started < 4 && (
          <div
            style={{
              top: this.state.t,
              left: `${y + this.state.l}px`,
              position: "absolute",
              opacity: this.props.color.started < 4 ? '1' :'0'
            }}
          >
            <img
              onMouseOver={
                this.state.dia === 5
                  ? () => this.setState({ battle: true, dia: 6 })
                  : null
              }
              style={{ width: "18px", height: "18px" }}
              src="https://imgur.com/lSr15pW.png"
            ></img>
          </div>
        )}
        <div
            style={{ top: "300px", left: `${y}px`, position: "absolute", opacity: this.state.dia > 13 && this.state.dia < 18 || this.props.color.started === 4 ? "1" : "0" }}
          >
            <img
              onClick={() => this.props.color.started === 4 ? this.setState({dia: 20}) : alert("I know you dont have the stone of patiences, but please have some.")}
              src={DesireStoneGif}
            ></img>
          </div>
        {(this.state.dia < 4 || this.props.color.started > 3) && (
          <div
            style={{ top: "490px", left: `${y + 208}px`, position: "absolute" }}
          >
            <img
              onMouseEnter={() => this.props.loader("homeQvillage")}
              src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
            ></img>
          </div>
        )}
        {this.battle()}
      </div>
    );
  }
}

export default DesireStone;
