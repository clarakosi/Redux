export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const getTodos = (todos) => {
    return {
        type: GET_TODOS,
        payload: todos
    }
}