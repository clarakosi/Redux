import { ADD_TODO, TOGGLE_COMPLETE } from '../Actions/index'

export default (todos = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...todos, {id: todos.length + 1, text: action.payload, completed: false}];
        case TOGGLE_COMPLETE:
            return todos.map((todo) => todo.id === action.payload ? [...todos, {id: todo.id, text: todo.text, completed: !todo.completed}] : todo)
        default: 
            return todos;
    }
}