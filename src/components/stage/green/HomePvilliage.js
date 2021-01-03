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
    mdM: 5,
    bmL: true,
    mdL: true,
    tpL: true,
    sL: true,
    action: false,
  };
  componentDidMount() {
    var t = Math.floor(Math.random() * 200);
    var m = Math.floor(Math.random() * -100);
    var b = Math.floor(Math.random() * 100);
    this.setState({
      tpM: t,
      mdM: m,
      bmM: b,
      interval: setInterval(this.timer, 10),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  timer = () => {
    if (this.state.bmM == -250) {
      this.setState({ bmD: false, bmM: this.state.bmM + 1 });
    } else if (this.state.bmM == 250) {
      this.setState({ bmD: true, bmM: this.state.bmM - 1 });
    } else if (this.state.bmD == false) {
      this.setState({ bmM: this.state.bmM + 1 });
    } else if (this.state.bmD == true) {
      this.setState({ bmM: this.state.bmM - 1 });
    }

    if (this.state.mdM == -250) {
      this.setState({ mdD: false, mdM: this.state.mdM + 1 });
    } else if (this.state.mdM == 250) {
      this.setState({ mdD: true, mdM: this.state.mdM - 1 });
    } else if (this.state.mdD == false) {
      this.setState({ mdM: this.state.mdM + 1 });
    } else if (this.state.mdD == true) {
      this.setState({ mdM: this.state.mdM - 1 });
    }

    if (this.state.tpM == -250) {
      this.setState({ tpD: false, tpM: this.state.tpM + 1 });
    } else if (this.state.tpM == 250) {
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
        case "s":
          this.setState({ sL: false, action: false });
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
            left: "32px",
            position: "relative",
          }}
        >
          <img
            onMouseEnter={() => this.props.loader("homeQvillage")}
            src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
          ></img>
        </div>
        {this.props.color.started < 4 && !this.state.action && (
          <div
            style={{
              top: "-130px",
              left: "6px",
              position: "relative",
              zIndex: "4",
            }}
          >
            <h1>
              <b
                onMouseEnter={() => this.setState({ action: true, duel: "s" })}
                onMouseLeave={() => this.setState({ action: true, duel: "s" })}
                style={{ fontSize: "164px", zIndex: "3" }}
              >
                {this.state.sL ? "#" : " "}
              </b>
            </h1>
          </div>
        )}
        <div
          style={{
            top: "100px",
            left: `${this.state.tpM + y}px`,
            position: "fixed",
          }}
        >
          <h1 onMouseEnter={() => this.setState({ action: true, duel: "t" })}>
            <b>{this.state.tpL ? "#" : " "}</b>
          </h1>
        </div>
        <div
          style={{
            top: "230px",
            left: `${this.state.mdM + y}px`,
            position: "fixed",
          }}
        >
          <h1 onMouseEnter={() => this.setState({ action: true, duel: "m" })}>
            <b>{this.state.mdL ? "#" : " "}</b>
          </h1>
        </div>
        <div
          style={{
            top: "364px",
            left: `${this.state.bmM + y}px`,
            position: "fixed",
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
            onMouseEnter={() => this.props.loader("village1")}
            src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
          ></img>
        </div>
        {this.action()}
      </Outside>
    );
  }
}

export default HomeUvillage;
