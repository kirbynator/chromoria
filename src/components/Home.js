import React from "react";
import Homi from "./stage/Menu";
import Begin from "./stage/white/Begin";
import CourageStone from "./stage/white/Coragestone";
import OutsideHome from "./stage/white/OutsideHeroHouse";
import HomeUvillage from "./stage/white/Home2Villiage";
import Village1 from "./stage/white/Village1";
import Village1nside from "./stage/white/Village1nside";
import HomePvillage from "./stage/green/HomePvilliage";
import HomeQvillage from "./stage/green/HomeQvilliage";
import DesireStone from "./stage/green/Desirestone";

//Stones
import CourageStoneGif from '../media/white/courageStone.gif'
import DesireStoneGif from '../media/green/desireStone.gif'

class Home extends React.Component {
  state = {
    stage: "menu",
    started: -1,
    opt: false,
    input: "",
    life: 0,
    maxLife: 0,
    oldLife: 0,
  };

  button(value) {
    if (value.toLowerCase() === "resume") {
      this.setState({ opt: false, input: "" });
    } else if (value.toLowerCase() === "quit") {
      window.location.reload(false);
    }
  }

  loader = (s, x) => {
    this.setState({ stage: s, ...x });
  };

  life() {
    if (this.state.life + this.state.maxLife !== this.state.oldLife) {
      this.setState({ oldLife: this.state.life + this.state.maxLife });
      var gr = [];
      var i = 0;
      for (i = 0; i < this.state.maxLife; i++) {
        if (i < this.state.life) {
          gr.push("♡");
        } else {
          gr.push("x");
        }
      }
      window.history.replaceState(null, null, `#Life:(${gr})`);
    }
  }

  savecode = (o) => {
    console.log(o);
    var x = o.split(",");
    console.log(x);
    var a = [];
    x.map((r) => {
      if (r === "true") {
        a.splice(a.length, 0, true);
      } else if (r === "false") {
        a.splice(a.length, 0, false);
      } else if (parseInt(r, 10)) {
        a.splice(a.length, 0, parseInt(r, 10));
      } else {
        a.splice(a.length, 0, r);
      }
    });
    console.log(a);
    this.setState({ stage: a[0], started: a[1], life: a[2], maxLife: a[3] });
  };

  display() {
    switch (this.state.stage) {
      case "menu":
        return <Homi saveload={this.savecode} loader={this.loader}></Homi>;
        break;
      case "begin":
        return <Begin loader={this.loader} color={this.state}></Begin>;
        break;
      case "couragestone":
        return (
          <CourageStone loader={this.loader} color={this.state}></CourageStone>
        );
        break;
      case "desirestone":
        return (
          <DesireStone loader={this.loader} color={this.state}></DesireStone>
        );
        break;
      case "outsidehome":
        return (
          <OutsideHome loader={this.loader} color={this.state}></OutsideHome>
        );
        break;
      case "home2village":
        return (
          <HomeUvillage loader={this.loader} color={this.state}></HomeUvillage>
        );
        break;
      case "homePvillage":
        return (
          <HomePvillage loader={this.loader} color={this.state}></HomePvillage>
        );
        break;
      case "homeQvillage":
        return (
          <HomeQvillage loader={this.loader} color={this.state}></HomeQvillage>
        );
        break;
      case "village1":
        return <Village1 loader={this.loader} color={this.state}></Village1>;
        break;
      case "village1nside":
        return (
          <Village1nside
            loader={this.loader}
            color={this.state}
          ></Village1nside>
        );
        break;
    }
  }

  option() {
    if (this.state.opt && this.state.stage !== "menu") {
      return (
        <div
          style={{
            zIndex: "11",
            width: "512px",
            height: "512px",
            background: "#fff",
            top: "32px",
            position: "absolute",
          }}
        >
          <div>
            <h1
              style={{ left: "210px", marginTop: "15%", position: "relative" }}
            >
              Pause
            </h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "-3%",
              }}
            >
              <h4>
                Savecode: {this.state.stage},{this.state.started},
                {this.state.life},{this.state.maxLife}
              </h4>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                marginTop: "2%",
              }}
            >
              <button
                style={{ padding: "15px 32px" }}
                onClick={() => this.button("resume")}
              >
                Resume
              </button>
              <button
                style={{ padding: "17px 42px" }}
                onClick={() => this.button("quit")}
              >
                Quit
              </button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                marginTop: "2%",
                background: "#000",
                height: "262px",
                alignItems: "center",
              }}
            >
              {this.state.started >= 0 && (
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={CourageStoneGif}
                ></img>
              )}
              {this.state.started >= 5 && (
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={DesireStoneGif}
                ></img>
              )}
            </div>
          </div>
        </div>
      );
      document.getElementById("theInput").focus();
    } else if (this.state.opt) {
      this.setState({ opt: false });
    }
  }

  render() {
    document.body.style = "background: #666";
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          flexDirection: "column",
        }}
      >
        <div
          onMouseEnter={() => this.setState({ opt: true })}
          style={{ width: "576px", height: "32px" }}
        ></div>
        <div style={{ display: "flex" }}>
          <div
            onMouseEnter={() => this.setState({ opt: true })}
            style={{ width: "32px", height: "512px" }}
          ></div>
          <div style={{ width: "512px", height: "512px" }}>
            {this.display()}
            {this.option()}
            {this.life()}
          </div>
          <div
            onMouseEnter={() => this.setState({ opt: true })}
            style={{ width: "32px", height: "512px" }}
          ></div>
        </div>
        <div
          onMouseEnter={() => this.setState({ opt: true })}
          style={{ width: "576px", height: "32px" }}
        ></div>
      </div>
    );
  }
}
export default Home;
