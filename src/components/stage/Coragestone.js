import React from "react";

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
          src="https://piskel-imgstore-b.appspot.com/img/18087026-5b5a-11ea-ab32-e9c455d1a893.gif"
        ></img>
      </div>
    );
  }
}
export default CourageStone;
