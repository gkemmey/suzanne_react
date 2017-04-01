import React from 'react'
import Todo from './todo.jsx'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: [], text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter  = this.handleEnter.bind(this);
    this.toggleTodo   = this.toggleTodo.bind(this);
    this.deleteTodo   = this.deleteTodo.bind(this);
  }

  render() {
    return (
      <section id="todoapp">
        <header id="header">
          <h1>todos</h1>
            <input
              type="text"
              id="new-todo"
              placeholder="What needs to be done?"
              autoFocus="autofocus"
              autoComplete="off"
              value={ this.state.text }
              onChange={ this.handleChange }
              onKeyPress={ this.handleEnter }
            />
        </header>

        <section id="main">
          <ul id="todos">
            {
              this.state.items.map((item) => (
                <Todo
                  key={ item.id }
                  item={ item }
                  toggleTodo={ this.toggleTodo }
                  deleteTodo={ this.deleteTodo }
                />
              ))
            }
          </ul>
        </section>

      </section>
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleEnter(event) {
    if (event.key !== "Enter") { return }

    var newItem = { text: this.state.text, id: Date.now(), completed: false }
    this.setState( (prevState) => ({ items: prevState.items.concat(newItem), text: '' }) );
  }

  toggleTodo(event, id) {
    const index = this.state.items.indexOf(this.state.items.find((item) => ( item.id === id )))

    this.setState((prevState) => ({
      items: [
        ...prevState.items.slice(0, index),
        { ...prevState.items[index], completed: !prevState.items[index].completed },
        ...prevState.items.slice(index + 1)
      ]
    }))
  }

  deleteTodo(event, id) {
    const index = this.state.items.indexOf(this.state.items.find((item) => ( item.id === id )))

    this.setState((prevState) => ({
      items: [
        ...prevState.items.slice(0, index),
        ...prevState.items.slice(index + 1)
      ]
    }))

  }
}


export default TodoApp
