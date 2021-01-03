import React from "react";
import CourageStoneGif from '../../../media/white/courageStone.gif'

class CourageStone extends React.Component {
  action() {
    this.props.loader("begin", {
      started: 0,
      life: 2,
      maxLife: this.props.color.maxLife + 1
    });
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          onClick={() => this.action()}
          src={CourageStoneGif}
        ></img>
      </div>
    );
  }
}
export default CourageStone;
