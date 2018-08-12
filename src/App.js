import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'REACT TODO APP',
      newTodo: '',
      todos: []
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
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="row">
         <h3 className="is-size-1 has-text-centered"><i className="fab fa-react fa-spin fa-lg"></i>&nbsp;{this.state.message}</h3>
        </div>
          <form onSubmit={(event) => this.formSubmitted(event)}>
        <div className="field">
          <label className="label is-medium" htmlFor="newTodo">NEW TODO</label>
          <div className="control has-icons-left">
            <input className="input is-large" onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo"/>
            <span className="icon is-large is-left">
              <i className="fas fa-sign-in-alt fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="row">
          <button className="button is-medium is-dark" type="submit">ADD TODO</button>
        </div>
        </form>
        <br/>
        <ul>
          <div className="row">
          {this.state.todos.map(todo => {
            return <li className="message is-large" key={todo.title}>{todo.title} <button className="button is-pulled-right">ERASE</button></li>
          })}
          </div>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
