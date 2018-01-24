import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, GET_TODOS } from '../Actions/index'

let id = -1;

export default (todos = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...todos, {id: ++id, text: action.payload, completed: false, delete: false}];
        case TOGGLE_COMPLETE:
            return todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        case DELETE_TODO:
            return todos.map(todo => todo.id ===action.payload ? {...todo, delete: !todo.delete}: todo);
        case GET_TODOS:
            return action.payload;
        default: 
            return todos;
    }
}