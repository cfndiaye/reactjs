import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  // userNameInput = React.createRef();
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(this.userNameInput.current.value);
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    //const newProfiles =[...this.props.profiles];
    this.props.onSubmit(resp.data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form" action="">
        <input
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          className=""
          type="text"
          placeholder="GitHub username"
          //ref={this.userNameInput}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
