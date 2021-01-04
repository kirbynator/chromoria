import React from "react";

class Menu extends React.Component {
  state = { input: "", code: 0 };

  componentDidMount() {
    window.history.replaceState(null, null, "/");
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e && e.preventDefault();
    this.props.saveload(this.state.input);
  };

  save = () => {
    localStorage.setItem('Settings', this.state.savecode);
    this.setState({ code: 0 });
  }

  render() {
    if (this.state.code === 2) {
      return (
        <div>
          <p>Settings</p>
          <label htmlfor="savcode">Savecodes</label>
          <input onChange={(e) => this.handleChange(e={target:{name: 'savecode', value:!this.state.savecode}})} name="savecode" id="savecode" type="checkbox" checked={this.state.savecode} />
          <div>Turning this one will enable Savecodes. This means a Savecode will appear on the Pause menu that can be entered on the Start Menu to go to the spot were paused</div>
          <div style={{ display: 'flex' }}>
            <button onClick={() => this.save()}>Save</button>
            <button onClick={() => this.setState({ code: 0 })}>Back</button>
          </div>
        </div>
      )
    } else if (this.state.code === 1) {
      return (
        <div>
          <p>Savecode</p> {localStorage.getItem('myData') && 'This will replace your Save!'}
          <form onSubmit={this.handleSubmit}>
            <input
              id="theInput"
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
          <div style={{ display: 'flex' }}>
            <button onClick={() => this.handleSubmit(null)}>Go</button>
            <button onClick={() => this.setState({ code: 0 })}>Back</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome to Chromoria</p>
          <button onClick={() => localStorage.getItem('myData') ? window.confirm('This will restart your Save! You will be starting over.') === true && this.props.loader("begin") : this.props.loader("begin")}>Begin</button>
          <br />
          {localStorage.getItem('myData') && <><button onClick={() => this.props.saveload(localStorage.getItem('myData'))}>Load Save</button>
            <br /></>}
          {localStorage.getItem('Settings') === "true" && <><button onClick={() => this.setState({ code: 1 })}>
            Save Code
          </button>
          <br /></>}
          <button onClick={() => this.setState({ code: 2, savecode: localStorage.getItem('Settings') === "true" })}>
            Settings
          </button>
        </div>
      );
    }
  }
}
export default Menu;
