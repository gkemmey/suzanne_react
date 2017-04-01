import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  render() {
    return (
      <li className={ (this.props.item.completed ? "completed " : "") }>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value="1"
            checked={ this.props.item.completed }
            onChange={ this.toggleTodo }
          />

          <label>{ this.props.item.text }</label>

          <button className="destroy" onClick={ this.deleteTodo } />
        </div>
      </li>
    );
  }

  toggleTodo(event) {
    this.props.toggleTodo(event, this.props.item.id)
  }

  deleteTodo(event) {
    this.props.deleteTodo(event, this.props.item.id)
  }
}

export default Todo
