import React from "react";
import Battle from "../../battle/Battle#";
import Outside from "../../backgound/Outside"

class HomeUvillage extends React.Component {
  state = {
    bmD: true,
    bmM: 11,
    tpM: 26,
    tpD: true,
    mdD: false,
    lfD: true,
    ctD: true,
    rtD: false,
    lfM: 5,
    ctM: 5,
    rtM: 5,
    bmL: true,
    mdL: true,
    tpL: true,
    lfL: true,
    ctL: true,
    rtL: true,
    action: false,
  };
  componentDidMount() {
    var t = Math.floor(Math.random() * 200);
    var m = Math.floor(Math.random() * -100);
    var b = Math.floor(Math.random() * 100);
    var l = 180;
    var c = 140;
    var r = 100;
    this.setState({
      tpM: t,
      mdM: m,
      bmM: b,
      lfM: l,
      ctM: c,
      rtM: r,
      interval: setInterval(this.timer, 10),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  timer = () => {
    if (this.state.bmM == -250) {
      this.setState({ bmD: false, bmM: this.state.bmM + 1 });
    } else if (this.state.bmM == 240) {
      this.setState({ bmD: true, bmM: this.state.bmM - 1 });
    } else if (this.state.bmD == false) {
      this.setState({ bmM: this.state.bmM + 1 });
    } else if (this.state.bmD == true) {
      this.setState({ bmM: this.state.bmM - 1 });
    }

    if (this.state.mdM == -250) {
      this.setState({ mdD: false, mdM: this.state.mdM + 1 });
    } else if (this.state.mdM == 180) {
      this.setState({ mdD: true, mdM: this.state.mdM - 1 });
    } else if (this.state.mdD == false) {
      this.setState({ mdM: this.state.mdM + 1 });
    } else if (this.state.mdD == true) {
      this.setState({ mdM: this.state.mdM - 1 });
    }

    if (this.state.lfM == -200) {
      this.setState({ lfD: false, lfM: this.state.lfM + 1 });
    } else if (this.state.lfM == 200) {
      this.setState({ lfD: true, lfM: this.state.lfM - 1 });
    } else if (this.state.lfD == false) {
      this.setState({ lfM: this.state.lfM + 1 });
    } else if (this.state.lfD == true) {
      this.setState({ lfM: this.state.tpM - 1 });
    }

    if (this.state.ctM == -200) {
      this.setState({ ctD: false, ctM: this.state.ctM + 1 });
    } else if (this.state.ctM == 200) {
      this.setState({ ctD: true, ctM: this.state.ctM - 1 });
    } else if (this.state.ctD == false) {
      this.setState({ ctM: this.state.ctM + 1 });
    } else if (this.state.ctD == true) {
      this.setState({ ctM: this.state.ctM - 1 });
    }

    if (this.state.rtM == -240) {
      this.setState({ rtD: false, rtM: this.state.rtM + 1 });
    } else if (this.state.rtM == 240) {
      this.setState({ rtD: true, rtM: this.state.rtM - 1 });
    } else if (this.state.rtD == false) {
      this.setState({ rtM: this.state.rtM + 1 });
    } else if (this.state.rtD == true) {
      this.setState({ rtM: this.state.rtM - 1 });
    }
    if (this.state.tpM == -250) {
      this.setState({ tpD: false, tpM: this.state.tpM + 1 });
    } else if (this.state.tpM == 240) {
      this.setState({ tpD: true, tpM: this.state.tpM - 1 });
    } else if (this.state.tpD == false) {
      this.setState({ tpM: this.state.tpM + 1 });
    } else if (this.state.tpD == true) {
      this.setState({ tpM: this.state.tpM - 1 });
    }
  };

  win = (r) => {
    if (r == "w" && this.state.action) {
      switch (this.state.duel) {
        case "t":
          this.setState({ tpL: false, action: false });
          break;
        case "m":
          this.setState({ mdL: false, action: false });
          break;
        case "b":
          this.setState({ bmL: false, action: false });
          break;
        case "c":
          this.setState({ ctL: false, action: false });
          break;
        case "f":
          this.setState({ lfL: false, action: false });
          break;
        case "r":
          this.setState({ rtL: false, action: false });
          break;
      }
    } else if ("l") {
      this.props.loader(this.props.color.stage, {
        life: this.props.color.life - 1,
      });
    }
  };

  action(r) {
    if (this.state.action) {
      return <Battle win={this.win}></Battle>;
    }
  }
  render() {
    const y = window.innerWidth / 2;
    return (
      <Outside props={this.props}>
        <div
          style={{
            zIndex: "3",
            top: "2px",
            left: "64px",
            position: "relative",
          }}
        >
          <img
            onMouseEnter={() => this.props.loader("homePvillage")}
            src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
          ></img>
        </div>
        <div
          style={{
            top: `${this.state.lfM + 185}px`,
            left: "96px",
            position: "relative",
          }}
        >
          <h1>
            <b
              onMouseEnter={() => this.setState({ action: true, duel: "f" })}
              onMouseLeave={() => this.setState({ action: true, duel: "f" })}
            >
              {this.state.lfL ? "#" : " "}
            </b>
          </h1>
        </div>
        <div
          style={{
            top: `${this.state.ctM + 115}px`,
            left: "256px",
            position: "relative",
          }}
        >
          <h1>
            <b
              onMouseEnter={() => this.setState({ action: true, duel: "c" })}
              onMouseLeave={() => this.setState({ action: true, duel: "c" })}
            >
              {this.state.ctL ? "#" : " "}
            </b>
          </h1>
        </div>
        <div
          style={{
            top: `${this.state.rtM + 70}px`,
            left: "416px",
            position: "relative",
          }}
        >
          <h1>
            <b
              onMouseEnter={() => this.setState({ action: true, duel: "r" })}
              onMouseLeave={() => this.setState({ action: true, duel: "r" })}
            >
              {this.state.rtL ? "#" : " "}
            </b>
          </h1>
        </div>
        <div
          style={{
            top: "100px",
            left: `${this.state.tpM + y}px`,
            position: "absolute",
          }}
        >
          <h1 onMouseEnter={() => this.setState({ action: true, duel: "t" })}>
            <b>{this.state.tpL ? "#" : " "}</b>
          </h1>
        </div>
        <div
          style={{
            top: "100px",
            left: `${this.state.mdM + y}px`,
            position: "absolute",
          }}
        >
          <h1 style={{fontSize: "164px"}} onMouseEnter={() => this.setState({ action: true, duel: "m" })}>
            <b>{this.state.mdL ? "#" : " "}</b>
          </h1>
        </div>
        <div
          style={{
            top: "394px",
            left: `${this.state.bmM + y}px`,
            position: "absolute",
          }}
        >
          <h1 onMouseEnter={() => this.setState({ action: true, duel: "b" })}>
            <b>{this.state.bmL ? "#" : " "}</b>
          </h1>
        </div>
        <div
          style={{ top: "470px", left: `${y + 222}px`, position: "absolute" }}
        >
          <img
            onMouseEnter={() => this.props.loader("desirestone")}
            src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
          ></img>
        </div>
        {this.action()}
      </Outside>
    );
  }
}

export default HomeUvillage;
