import React from "react";

class Begin extends React.Component {
  state = { dia: 0 };

  dose = () => {
    this.props.loader("begin", { started: 1 });
    this.setState({ hjk: false });
  };

  dfghj() {
    if (this.props.color.started == 0) {
      return (
        <div>
          <p
            style={{
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid"
            }}
          >
            You pick up the white rock and are filled with determation
          </p>
          <button onClick={() => this.dose()}>
            <b>></b>
          </button>
        </div>
      );
    } else {
      return (
        <img
          onMouseEnter={() => this.props.loader("outsidehome")}
          style={{ top: "128px", position: "relative" }}
          src="https://piskel-imgstore-b.appspot.com/img/91aef270-5b63-11ea-b28d-e9c455d1a893.gif"
        ></img>
      );
    }
  }

  text() {
    switch (this.state.dia) {
      case 0:
        return "You wake up in complete darkness";
        break;
      case 1:
        return "Neadless to say, you are quite confused";
        break;
      case 2:
        return "*CRASH*";
        break;
      case 3:
        return "Did something just come through the roof?";
        break;
      case 4:
        this.props.loader("couragestone");
        break;
    }
  }
  render() {
    if (this.props.color.started >= 0) {
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
          {this.dfghj()}
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", height: "100%", background: "#000" }}>
          <p
            style={{
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid"
            }}
          >
            {this.text()}
          </p>

          <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
            <b>></b>
          </button>
        </div>
      );
    }
  }
}
export default Begin;
