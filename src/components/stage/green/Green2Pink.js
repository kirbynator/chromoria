import React from "react";
import Battle from "../../battle/Battle#";
import Outside from "../../backgound/Outside"
import Canyon from "../../backgound/Canyon"
import Cactus from "../../../media/green/cactusG.png"

class Green2Pink extends React.Component {

  render() {
    const y = window.innerWidth / 2;
    return (
      <div style={{ width: "100%", height: "100%", display: 'flex' }}>
        <div style={{ width: "50%", height: "100%" }}>
          <Outside props={this.props}>
            <div
              style={{
                top: "268px",
                // left: `${y+222}px`,
                position: "absolute",
              }}
              onMouseEnter={() => this.props.loader("village1")}
            >
              <img src="https://piskel-imgstore-b.appspot.com/img/4f86b197-5c06-11ea-a914-033203692228.gif"></img>
            </div>
          </Outside>
        </div>
        <div style={{ width: "50%", height: "100%" }}>
          <Canyon props={this.props}>
            <div
              style={{
                top: "32px",
                left: `${y+222}px`,
                position: "absolute",
              }}
              // onMouseEnter={() => this.props.loader("village1")}
            >
              <img src={Cactus}></img>
            </div>
          </Canyon>
        </div>
      </div>
    )
  }
}

export default Green2Pink;
