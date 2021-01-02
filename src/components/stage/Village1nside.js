import React from "react";

class Begin extends React.Component {
  state = { dia: 0, hjk: false, dia: 0 };

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
          return "There is a ledgends of different color stones, each with their own emotion tied to it";
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
          return "That is a disturbing though...";
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
          return "*You gained a life*";
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
      if (this.state.dia == 1) {
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
            I got my favorite meme turned into a throw rug!
          </p>
        </div>
      );
    }
  }

  bubble() {
    if (this.state.hjk || this.props.color.started < 3) {
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
            {this.text()}
          </p>
          {this.button()}
        </div>
      );
    } else {
      return <div style={{ height: "81px" }}></div>;
    }
  }

  build(b) {
    switch (b) {
      case 1:
        const y = window.innerWidth / 2;
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
              src="https://i.imgflip.com/3tnjfn.jpg"
            ></img>
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
            {this.bubble()}
            <img
              onMouseEnter={() => this.props.loader("village1")}
              style={{ top: "264px", left: "479px", position: "relative" }}
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
                top: "100px",
                position: "relative",
                left: "100px",
                width: "18px",
                height: "18px"
              }}
              src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
            ></img>
          </div>
        );
        break;
      case 3:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <img
              onMouseEnter={() => this.props.loader("village1")}
              style={{ top: "490px", position: "absolute" }}
              src="https://piskel-imgstore-b.appspot.com/img/91aef270-5b63-11ea-b28d-e9c455d1a893.gif"
            ></img>
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
            'url("https://piskel-imgstore-b.appspot.com/img/e24790c7-5b5d-11ea-9381-017aeb12baa9.gif")'
        }}
      >
        {this.build(this.props.color.temp)}
      </div>
    );
  }
}
export default Begin;
