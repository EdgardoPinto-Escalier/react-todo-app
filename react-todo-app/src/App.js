import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'HELLO TODO APP',
      newTodo: ''
    };
  }

  newTodoChanged(event) {
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(this.state.newTodo);
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor="newTodo">NEW TODO</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo"/>
          <button type="submit">ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default App;
