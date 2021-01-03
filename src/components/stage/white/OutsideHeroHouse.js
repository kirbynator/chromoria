import React from "react";
import Battle from "../../battle/Battle#";
import Outside from "../../backgound/Outside"

class OutsideHome extends React.Component {
  state = { battle: false, dia: 0, action: false };

  script() {
    if (this.state.dia < 2 && this.props.color.started < 2) {
      return (
        <div>
          <p
            style={{
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid",
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
  text() {
    switch (this.state.dia) {
      case 0:
        return `You need to go to town`;
        break;
      case 1:
        return `It looks like a # is in your way`;
        break;
    }
  }
  action() {
    if (this.state.action) {
      return <Battle win={this.win}></Battle>;
    }
  }

  win = (r) => {
    if (r === "w") {
      this.setState({ action: false });
      this.props.loader("outsidehome", { started: 2 });
    } else if ("l") {
      this.props.loader(this.props.color.stage, {
        life: this.props.color.life - 1,
      });
    }
  };
  enemy() {
    if (this.props.color.started < 2) {
      return (
        <h1 onMouseEnter={() => this.setState({ action: true })}>
          <b>#</b>
        </h1>
      );
    } else {
      return (
        <img
          onMouseEnter={() => this.props.loader("home2village")}
          src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
        ></img>
      );
    }
  }
  render() {
    const y = window.innerWidth / 2;
    return (
      <Outside props={this.props}>
        {this.script()}
        {this.action()}
        <img
          onMouseEnter={() => this.props.loader("begin")}
          style={{ top: "96px", position: "absolute" }}
          src="https://piskel-imgstore-b.appspot.com/img/8645f7d1-5b6f-11ea-b47b-5de7032cf0c5.gif"
        ></img>
        <div
          style={{
            top: "480px",
            left: `${y - 200}px`,
            position: "fixed",
          }}
        >
          {this.enemy()}
        </div>
      </Outside>
    );
  }
}
export default OutsideHome;
