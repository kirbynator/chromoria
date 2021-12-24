import React from "react";
import Card from "../extra/MemoryCard";
class Memory extends React.Component {
  state = {
    ai: [],
    c1: null,
    c2: null,
    score: [0, 0],
    dia: 0,
    talk: true,
    cards: [
      { value: "gator", face: "🐊", up: false, index: null },
      { value: "gator", face: "🐊", up: false, index: null },
      { value: "cactus", face: "🌵", up: false, index: null },
      { value: "cactus", face: "🌵", up: false, index: null },
      { value: "brocli", face: "🥦", up: false, index: null },
      { value: "brocli", face: "🥦", up: false, index: null },
      { value: "battery", face: "🔋", up: false, index: null },
      { value: "battery", face: "🔋", up: false, index: null },
      { value: "heart", face: "💚", up: false, index: null },
      { value: "heart", face: "💚", up: false, index: null },
      { value: "check", face: "✅", up: false, index: null },
      { value: "check", face: "✅", up: false, index: null },
      { value: "sick", face: "🤢", up: false, index: null },
      { value: "sick", face: "🤢", up: false, index: null },
      { value: "turtle", face: "🐢", up: false, index: null },
      { value: "turtle", face: "🐢", up: false, index: null },
    ],
  };

  componentDidMount() {
    this.setState({ cards: this.state.cards.sort(() => Math.random() - 0.5) });
  }

  board() {
    if (this.state.dia > 1) {
      return (
        <div
          style={{
            width: "150px",
            height: "150px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignContent: "space-around",
          }}
        >
          {this.state.cards.map((card, i) => {
            card.index = i;
            return card.value ? (
              <Card drill={this.drill} card={card}></Card>
            ) : (
              <div
                style={{
                  width: "29px",
                  height: "29px",
                }}
              ></div>
            );
          })}
        </div>
      );
    }
  }

  bubble() {
    if (this.state.talk) {
      return (
        <div>
          <p
            style={{
              height: "40px",
              position: "relative",
              zIndex: "2",
              background: "#fff",
              marginTop: "0px",
              borderColor: "#000",
              borderStyle: "solid",
            }}
          >
            {this.text()}
          </p>
          {this.state.dia < 2 ||
          this.state.dia === 5 ||
          this.state.dia === 7 ||
          this.state.dia > 9 ||
          this.state.dia > 19 ? (
            <button onClick={() => this.setState({ dia: this.state.dia + 1 })}>
              <b>></b>
            </button>
          ) : (
            <div style={{ height: "19px" }}></div>
          )}
        </div>
      );
    } else {
      return <div style={{ height: "81px" }}></div>;
    }
  }

  text() {
    switch (this.state.dia) {
      case 0:
        return "We are going to play a game of memory.";
        break;
      case 1:
        return "Let's make a wager, winner gets the others stone";
        break;
      case 2:
        if (this.state.score[0] + this.state.score[1] === 8) {
          this.setState({ dia: 20 });
        } else {
          return "Not my turn";
        }
        break;
      case 4:
        this.state.c1.value === this.state.c2.value
          ? this.setState({ dia: 5 })
          : this.setState({ dia: 7 });
        break;
      case 5:
        return "Looks like you got a match, even though it should have been mine";
        break;
      case 6:
        this.match(true);
        break;
      case 7:
        return "No match for you, more matches for me!";
        break;
      case 8:
        this.match(false);
        break;
      case 9:
        if (this.state.score[0] + this.state.score[1] === 8) {
          this.setState({ dia: 20 });
        } else {
          this.ai();
        }
        break;
      case 10:
        var c = this.state.cards;
        var d = this.state.bot[0];
        d.up = true;
        c.splice(this.state.bot[0].index, 1, d);
        this.setState({ cards: c, dia: 11 });
        break;
      case 11:
        return "Here is my first choice";
        break;
      case 12:
        var c = this.state.cards;
        var d = this.state.bot[1];
        d.up = true;
        c.splice(this.state.bot[1].index, 1, d);
        this.setState({ cards: c, dia: 13 });
        break;
      case 13:
        return "Here is my second choice";
        break;
      case 14:
        this.state.bot[0].value === this.state.bot[1].value
          ? this.setState({ dia: 15 })
          : this.setState({ dia: 17 });
        break;
      case 15:
        return "This match is mine!";
        break;
      case 16:
        this.aimatch(true);
        break;
      case 17:
        return "Why did you not match!";
        break;
      case 18:
        this.aimatch(false);
        break;
      case 20:
        return "The game is over!";
        break;
      case 21:
        return "And it looks like the winner is...";
        break;
      case 22:
        this.state.score[0] > this.state.score[1]
          ? this.setState({ dia: 23 })
          : this.setState({ dia: 25 });
        break;
      case 23:
        return "Not me! How did this happen?";
        break;
      case 24:
        this.props.drill(true);
        break;
      case 25:
        return "Me! Your stone is mine!";
        break;
      case 26:
        return "Still coming";
        break;
    }
  }

  drill = (x) => {
    this.undup(x);
    x.up = true;
    var c = this.state.cards;
    c.splice(x.index, 1, x);
    if (!this.state.c1) {
      this.setState({ cards: c, c1: x });
    } else if (this.state.c1 && this.state.c1 !== x && !this.state.c2) {
      this.setState({ cards: c, c2: x, dia: 4 });
    }
  };

  match = (b) => {
    if (b) {
      var c = this.state.cards;
      c.splice(this.state.c1.index, 1, { value: null, index: null });
      c.splice(this.state.c2.index, 1, { value: null, index: null });
      const newAI = this.state.ai.map((card) => {
        if (
          card.index !== this.state.c1.index &&
          card.index !== this.state.c2.index
        ) {
          return card;
        }
      });
      this.setState({
        score: [this.state.score[0] + 1, this.state.score[1]],
        cards: c,
        dia: 9,
        ai: newAI.filter(Boolean),
        c1: null,
        c2: null,
      });
    } else {
      var c = this.state.cards;
      c.splice(this.state.c1.index, 1, {
        value: this.state.c1.value,
        face: this.state.c1.face,
        up: b,
        index: null,
      });
      c.splice(this.state.c2.index, 1, {
        value: this.state.c2.value,
        face: this.state.c2.face,
        up: b,
        index: null,
      });
      this.setState({
        cards: c,
        dia: 9,
        c1: null,
        c2: null,
      });
    }
  };

  aimatch = (b) => {
    if (b) {
      var c = this.state.cards;
      c.splice(this.state.bot[1].index, 1, { value: null, index: null });
      c.splice(this.state.bot[0].index, 1, { value: null, index: null });
      const newAI = this.state.ai.map((card) => {
        if (
          card.index !== this.state.bot[1].index &&
          card.index !== this.state.bot[0].index
        ) {
          return card;
        }
      });
      this.setState({
        score: [this.state.score[0], this.state.score[1] + 1],
        cards: c,
        ai: newAI.filter(Boolean),
        dia: 2,
        bot: [],
      });
    } else {
      var c = this.state.cards;
      c.splice(this.state.bot[1].index, 1, {
        value: this.state.bot[1].value,
        face: this.state.bot[1].face,
        up: b,
        index: null,
      });
      c.splice(this.state.bot[0].index, 1, {
        value: this.state.bot[0].value,
        face: this.state.bot[0].face,
        up: b,
        index: null,
      });
      this.setState({
        cards: c,
        dia: 2,
        bot: [],
      });
    }
  };

  ai() {
    if (this.state.dia === 9) {
      var good = null;
      this.state.ai.map((card, i) => {
        var c = this.state.ai;
        c.splice(i, 1);
        c.map((x) => {
          return card.value === x.value ? (good = [card, x]) : null;
        });
      });
    }
    if (good) {
      this.setState({ dia: 10, bot: good });
    } else {
      let cqrds = [];
      this.state.cards.map((card) => {
        console.log(card);
        return card.value ? cqrds.push(card) : null;
      });
      cqrds.sort(() => Math.random() - 0.5);
      let a = cqrds.pop();
      let b = cqrds.shift();
      if (this.undup(a)) {
        this.undup(b);
      }
      this.setState({ dia: 10, bot: [a, b] });
    }
  }

  undup(v) {
    if (-1 === this.state.ai.findIndex((c) => c.index === v.index)) {
      this.setState({ ai: [...this.state.ai, v] });
    }
    return true;
  }

  render() {
    return (
      <div
        style={{
          zIndex: "9",
          width: "512px",
          height: "512px",
          background: "#fff",
          top: "32px",
          position: "absolute",
        }}
      >
        {this.bubble()}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "18px", height: "18px", margin: "64px" }}></div>
          {this.board()}
          <img
            style={{ width: "18px", height: "18px", margin: "64px" }}
            src="https://imgur.com/lSr15pW.png"
          ></img>
        </div>
      </div>
    );
  }
}
export default Memory;
