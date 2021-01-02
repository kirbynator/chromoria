import React from "react";

class Battle extends React.Component {
  state = {
    dia: 0,
    but: true,
    game: ["", "", "", "", "", "", "", "", ""],
    go: 0
  };

  action(n) {
    const { game } = this.state;

    if (game[n] == "") {
      var arr = game.slice();
      arr.splice(n, 1, "X");
      this.setState({ game: arr, dia: 4, go: 1 });
    }
  }

  result() {
    const { game, go } = this.state;
    if (go == 1) {
      if (
        (game[0] == "X" && game[4] == "X" && game[8] == "X") ||
        (game[2] == "X" && game[4] == "X" && game[6] == "X") ||
        (game[0] == "X" && game[1] == "X" && game[2] == "X") ||
        (game[3] == "X" && game[4] == "X" && game[5] == "X") ||
        (game[6] == "X" && game[7] == "X" && game[8] == "X") ||
        (game[0] == "X" && game[3] == "X" && game[6] == "X") ||
        (game[1] == "X" && game[4] == "X" && game[7] == "X") ||
        (game[2] == "X" && game[5] == "X" && game[8] == "X")
      ) {
        this.setState({ dia: 5, go: 3, but: true });
      } else {
        var n = [];
        this.state.game.map((c, i) => {
          if (c == "") {
            n.splice(0, 0, i);
          }
        });
        var arr = this.state.game.slice();
        arr.splice(n[Math.floor(Math.random() * n.length)], 1, "O");
        this.setState({ game: arr, dia: 4, go: 4 });
      }
    } else if (go == 4) {
      if (
        (game[0] == "O" && game[4] == "O" && game[8] == "O") ||
        (game[2] == "O" && game[4] == "O" && game[6] == "O") ||
        (game[0] == "O" && game[1] == "O" && game[2] == "O") ||
        (game[3] == "O" && game[4] == "O" && game[5] == "O") ||
        (game[6] == "O" && game[7] == "O" && game[8] == "O") ||
        (game[0] == "O" && game[3] == "O" && game[6] == "O") ||
        (game[1] == "O" && game[4] == "O" && game[7] == "O") ||
        (game[2] == "O" && game[5] == "O" && game[8] == "O")
      ) {
        this.setState({ dia: 7, go: 3, but: true });
      } else {
        this.setState({ go: 0 });
      }
      if (game.indexOf("") == -1 && this.state.dia < 9) {
        this.setState({ dia: 9, but: true });
      }
    }
  }

  board() {
    if (this.state.dia > 1) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <div
                onClick={() => this.action(0)}
                style={{
                  textAlign: "center",
                  width: "32px",
                  height: "32px",
                  borderRight: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[0]}
              </div>
              <div
                onClick={() => this.action(1)}
                style={{
                  textAlign: "center",
                  width: "32px",
                  height: "32px",
                  borderLeft: "solid",
                  borderRight: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[1]}
              </div>
              <div
                onClick={() => this.action(2)}
                style={{
                  width: "32px",
                  textAlign: "center",
                  height: "32px",
                  borderLeft: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[2]}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                onClick={() => this.action(3)}
                style={{
                  width: "32px",
                  textAlign: "center",
                  height: "32px",
                  borderRight: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[3]}
              </div>
              <div
                onClick={() => this.action(4)}
                style={{
                  width: "32px",
                  height: "32px",
                  textAlign: "center",
                  borderLeft: "solid",
                  borderRight: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[4]}
              </div>
              <div
                onClick={() => this.action(5)}
                style={{
                  width: "32px",
                  height: "32px",
                  textAlign: "center",
                  borderLeft: "solid",
                  borderColor: "#000",
                  borderBottom: "solid",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[5]}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                onClick={() => this.action(6)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRight: "solid",
                  borderColor: "#000",
                  textAlign: "center",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[6]}
              </div>
              <div
                onClick={() => this.action(7)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderLeft: "solid",
                  textAlign: "center",
                  borderRight: "solid",
                  borderColor: "#000",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[7]}
              </div>
              <div
                onClick={() => this.action(8)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderLeft: "solid",
                  borderColor: "#000",
                  textAlign: "center",
                  borderTop: "solid",
                  background: "#fff"
                }}
              >
                {this.state.game[8]}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <h1>
            <b>#</b>
          </h1>
        </div>
      );
    }
  }

  text() {
    switch (this.state.dia) {
      case 0:
        return ` You are dueling a #!`;
        break;
      case 1:
        return ` # challenges you to a match of tic-tac-toe`;
        break;
      case 2:
        if (this.state.but) {
          this.setState({ but: false, dia: 3 });
        }
        break;
      case 3:
        return " Being a gentlesymbol, # allows you to go first";
        break;
      case 4:
        return "# impatiently waits for your move, not very gentlesymboly of #";
        break;
      case 5:
        return "You win!";
        break;
      case 6:
        return this.props.win("w");
        break;
      case 7:
        return "You lose";
        break;
      case 8:
        this.setState({
          dia: 1,
          game: ["", "", "", "", "", "", "", "", ""],
          go: 0,
          but: true
        });
        return this.props.win("l");
        break;
      case 9:
        return "A draw! # wants to go again";
        break;
      case 10:
        return this.setState({
          dia: 3,
          game: ["", "", "", "", "", "", "", "", ""],
          go: 0,
          but: false
        });
        break;
    }
  }

  button() {
    if (this.state.but) {
      return (
        <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
          <b>></b>
        </button>
      );
    }
  }

  render() {
    return (
      <div
        style={{
          zIndex: "42",
          width: "512px",
          height: "512px",
          background: "#fff",
          top: "32px",
          position: "absolute"
        }}
      >
        <p
          style={{
            background: "#fff",
            marginTop: "0px",
            borderColor: "#000",
            borderStyle: "solid"
          }}
        >
          {this.text()}
        </p>
        {this.button()}
        {this.board()}
        {this.result()}
      </div>
    );
  }
}
export default Battle;
