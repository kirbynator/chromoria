import React from "react";
import Options from "./extra/Options"
import Levels from "./extra/Levels"

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

  loader = (s, x) => {
    this.setState({ stage: s ? s: this.state.stage, ...x });
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
      window.history.replaceState(null, null, `#Health:(${gr})`);
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

  option() {
    if (this.state.opt && this.state.stage !== "menu") {
      return (
       <Options loader={this.loader} color={this.state}/>
      );
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
            {Levels(this.state, this.loader, this.savecode)}
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
