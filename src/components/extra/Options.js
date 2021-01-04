import React from "react";
import CourageStoneGif from '../../media/white/courageStone.gif'
import DesireStoneGif from '../../media/green/desireStone.gif'

class Options extends React.Component {
  state = { show: 0 }

  button(value) {
    if (value.toLowerCase() === "resume") {
      this.props.loader(this.props.color.stage, { opt: false, input: "" });
    } else if (value.toLowerCase() === "quit") {
      window.location.reload(false);
    }
  }

  bottomHalf() {
    if (this.state.show === 2) {
      return (
        <div
          onMouseLeave={() => this.setState({ show: 0 })}
          style={{
            border: "solid",
            width: "99%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2%",
            background: "#228B22",
            height: "262px",
            alignItems: "center",
          }}
        >
          commingsoon
          </div>
      )
    } else if (this.state.show === 1) {
      return (
        <div
          onMouseLeave={() => this.setState({ show: 0 })}
          style={{
            border: "solid",
            width: "99%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2%",
            background: "#fff",
            height: "262px",
            alignItems: "center",
          }}
        >
          You have {this.props.color.life} out of {this.props.color.maxLife} health{this.props.color.maxLife > this.props.color.life ? ' left!' : '.'}
        </div>
      )

    } else {
      return (
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
          {this.props.color.started >= 0 && (
            <img
              onMouseEnter={() => this.setState({ show: 1 })}
              style={{ width: "32px", height: "32px" }}
              src={CourageStoneGif}
            ></img>
          )}
          {this.props.color.started >= 5 && (
            <img
              onMouseEnter={() => this.setState({ show: 2 })}
              style={{ width: "32px", height: "32px" }}
              src={DesireStoneGif}
            ></img>
          )}
        </div>
      )
    }

  }

  render() {
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
            {localStorage.getItem('Settings') === "true" ? <h4>
              Savecode: {this.props.color.stage},{this.props.color.started},
                  {this.props.color.life},{this.props.color.maxLife}
            </h4>:
          <b style={{marginTop:'5em'}}/>}
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
          {this.bottomHalf()}
        </div>
      </div>)
  }

}

export default Options