import React from "react";

class Menu extends React.Component {
  state = { input: "", code: false };

  componentDidMount() {
    window.history.replaceState(null, null, "/");
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveload(this.state.input);
  };

  render() {
    if (this.state.code) {
      return (
        <div>
          <p>Savecode</p>
          <form onSubmit={this.handleSubmit}>
            <input
              id="theInput"
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
          <button onClick={() => this.setState({ code: false })}>Back</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome to Chromotale</p>
          <button onClick={() => this.props.loader("begin")}>Begin</button>
          <button onClick={() => this.setState({ code: true })}>
            Save Code
          </button>
        </div>
      );
    }
  }
}
export default Menu;
