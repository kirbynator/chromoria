import React from "react";
import Battle from "../../battle/Battle#";
import Outside from "../../backgound/Outside"
import VillageHouse1 from "../../backgound/buildings/VillageHouse1"

class Village1 extends React.Component {
  state = { hjk: { boo: false, talk: "foo bar" }, dia:0 };

  viltalk(y) {
    if (this.props.color.started < 3) {
      return (
        <img
          onMouseEnter={() =>
            this.setState({
              hjk: {
                boo: true,
                talk:
                  "Im supposed to talk to the village elder but they can go on and on, please go for me!",
              },
            })
          }
          onMouseLeave={() => this.setState({ hjk: { boo: false } })}
          style={{
            top: "500px",
            left: `${y+222}px`,
            position: "absolute",
            width: "18px",
            height: "18px",
          }}
          src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
        ></img>
      );
    } else {
      return (
        <img
          onMouseEnter={() => this.props.loader("homePvillage")}
          style={{
            top: "500px",
            left: `${y+222}px`,
            position: "absolute",
          }}
          src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
        ></img>
      );
    }
  }

  gotgreen(y) {
    if (this.props.color.started < 4) {
      return (
        <img
          onMouseEnter={() =>
            this.setState({
              hjk: {
                boo: true,
                talk:
                  "I need a messenger to deliver a letter to the next village, but you don't look like you have anywhere to put it",
              },
            })
          }
          onMouseLeave={() => this.setState({ hjk: { boo: false } })}
          style={{
            top: "268px",
            position: "absolute",
            width: "18px",
            height: "18px",
          }}
          src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
        ></img>
      );
    } else {
      return(<img
          onMouseEnter={() => !this.state.hjk.boo &&
            this.setState({
              hjk: {
                boo: true
              },
            })
          }
          style={{
            top: "268px",
            position: "absolute",
            width: "18px",
            height: "18px",
          }}
          src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
        ></img>)
    }
  }

  bubble() {
    if (this.state.hjk.boo === true && this.props.color.started < 5) {
      return (
        <div>
          <p
            style={{
              position: "relative",
              zIndex: "2",
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid",
            }}
          >
            {this.state.hjk.talk}
          </p>
        </div>
      );
    } else if (this.state.hjk.boo === true && this.props.color.started >= 5) {
        return (<div>
          <p
            style={{
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
        </div>)
    } else {
      return <div style={{ height: "58px" }}></div>;
    }
  }

  text() {
    switch (this.state.dia) {
      case 0:
        return 'Hi, would you be willing to deliver a letter to the next village?'
      break;
      case 1:
        this.setState({dia:0, hjk: { boo: false }})
      break;
      case 2:
        return 'Great, thank you so much!'
      break;
      case 3:
        return 'You can store items in the green stone you hold'
      break;
      case 4:
        return "I'll put the letter in it to show you."
      break;
      case 5:
        this.props.loader(null, {started: this.props.color.started + 1})
        this.setState({dia:6})
      break;
      case 6:
        return "Stay save, and if you die on the way there let me know!"
      break;
    }
  }

  button() {
    if (this.props.color.started > 4) {
      if (this.state.dia === 0) {
        return (
          <div>
            <button onClick={() => this.setState({ dia: 2 })}>
              <b>Yes</b>
            </button>
            <button onClick={() => this.setState({ dia: 1 })}>
              <b>No</b>
            </button>
          </div>
        );
      } else if (this.state.dia >= 2 && this.state.dia < 5 ) {
        return (
          <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
            <b>></b>
          </button>
        );
      }
    } else if (this.props.color.started > 2 && this.state.hjk.boo) {
      return <div style={{ height: "19px" }}></div>;
    }
  }

  render() {
    const y = window.innerWidth / 2;
    return (
      <Outside props={this.props}>
        {this.bubble()}
        <div
          style={{
            top: "36px",
            left: `${y+180}px`,
            position: "absolute",
          }}
          onMouseEnter={() => this.props.loader("home2village")}
        >
          <img src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"></img>
        </div>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 1 })}
          style={{ top: "96px", position: "absolute" }}
          src={VillageHouse1(this.props)}
        ></img>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 2 })}
          style={{ top: "268px", position: "absolute", left: `${y+192}px` }}
          src={VillageHouse1(this.props)}
        ></img>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 3 })}
          style={{ top: "404px", position:'absolute' }}
          src={VillageHouse1(this.props)}
        ></img>
        {this.props.color.started > 5 && <div
          style={{
            top: "284px",
            position: "absolute",
          }}
          onMouseEnter={() => this.props.loader("green2pink")}
        >
          <img src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"></img>
        </div>}
        {this.viltalk(y)}
        {(this.props.color.started < 6 || this.state.dia > 5) && this.gotgreen()}

      </Outside>
    );
  }
}

export default Village1;
