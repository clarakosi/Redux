import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete } from '../Actions/index';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            id: '',
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

    completeToggle = () => {
        console.log(this.props.todos);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input value={this.state.text} onChange={this.inputHandler} placeholder="Add task"/>
                </form>
                <ul>
                    {this.props.todos.map(task => {
                        return <li key={task.id} onClick={this.completeToggle()} style={this.pr}>{task.text}</li>
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

export default connect(mapStateToProps, { addTodo, toggleComplete }) (Todo);