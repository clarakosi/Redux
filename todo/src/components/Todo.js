import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete, deleteTodo, getTodos } from '../Actions/index';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    inputHandler = (event) => {
        this.setState({text: event.target.value});
    }

    addTask = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({text: ''})
    }

    completeToggle = (id) => {
        this.props.toggleComplete(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
    }

    componentDidMount() {
        // check if todos exists in localStorage?
        // if todos exists in localStorage
        // dispatch a getTodos action, that sets the initial state of our todos
        const todos = JSON.parse(localStorage.getItem('todos'))
        if(todos) {
            this.props.getTodos(todos)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) return localStorage.setItem('todos', JSON.stringify(nextProps.todos));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input value={this.state.text} onChange={this.inputHandler} placeholder="Add task"/>
                </form>
                <ul className="tasks">
                    {this.props.todos.map(task => {
                        return <div className="tasks--list" key={task.id} style={task.delete ? {display: 'none'} : null}>
                        <li style={task.completed ? {textDecoration: 'line-through'} : null} onClick={() =>this.completeToggle(task.id)}>{task.text}</li>
                        <button onClick={() => this.deleteTodo(task.id)}>x</button>
                        </div>
                    })}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleComplete, deleteTodo, getTodos }) (Todo);