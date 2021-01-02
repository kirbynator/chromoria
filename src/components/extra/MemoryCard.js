import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "25px",
          height: "25px",
          background: this.props.card.up ? "#fff" : "green",
          border: "solid",
          borderColor: "#000",
          textAlign: "center"
        }}
        onClick={() =>
          this.props.card.up
            ? alert("You have aready fliped this one")
            : this.props.drill(this.props.card)
        }
      >
        {this.props.card.up ? this.props.card.face : " "}
      </div>
    );
  }
}
export default Card;
