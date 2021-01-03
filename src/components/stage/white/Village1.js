import React from "react";
import Battle from "../../battle/Battle#";
import Outside from "../../backgound/Outside"


class Village1 extends React.Component {
  state = { hjk: { boo: false, talk: "foo bar" } };

  viltalk() {
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
            top: "345px",
            position: "relative",
            left: "358px",
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
            top: "345px",
            position: "relative",
            left: "354px",
          }}
          src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"
        ></img>
      );
    }
  }

  gotgreen() {
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
            top: "113px",
            position: "relative",
            left: "-145px",
            width: "18px",
            height: "18px",
          }}
          src="https://ya-webdesign.com/images250_/cursor-arrow-png-7.png"
        ></img>
      );
    } else {
      return <p>coming soon!</p>;
    }
  }

  bubble() {
    if (this.state.hjk.boo == true) {
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
    } else {
      return <div style={{ height: "58px" }}></div>;
    }
  }

  render() {
    const y = window.innerWidth / 2;
    return (
      <Outside props={this.props}>
        {this.bubble()}
        <div
          style={{
            top: "-56px",

            left: "478px",
            position: "relative",
          }}
          onMouseEnter={() => this.props.loader("home2village")}
        >
          <img src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"></img>
        </div>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 1 })}
          style={{ top: "96px", position: "absolute" }}
          src="https://piskel-imgstore-b.appspot.com/img/bdb4c65c-6c7b-11ea-ab1f-6fc0fc2128c5.gif"
        ></img>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 2 })}
          style={{ top: "106px", position: "relative", left: "448px" }}
          src="https://piskel-imgstore-b.appspot.com/img/bdb4c65c-6c7b-11ea-ab1f-6fc0fc2128c5.gif"
        ></img>
        <img
          onMouseEnter={() => this.props.loader("village1nside", { temp: 3 })}
          style={{ top: "300px", position: "relative", left: "-64px" }}
          src="https://piskel-imgstore-b.appspot.com/img/bdb4c65c-6c7b-11ea-ab1f-6fc0fc2128c5.gif"
        ></img>
        {this.viltalk()}
        {this.gotgreen()}
      </Outside>
    );
  }
}

export default Village1;
