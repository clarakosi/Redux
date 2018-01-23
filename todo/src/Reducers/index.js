// import { ADD_TODO } from '../Actions/index';

// const initial = [
//     {
//         text: 'Add a task to list',
//         completed: false
//     }
// ]

// export default (state = initial, action) => {
//     switch(action.type) {
//         case ADD_TODO:
//             return [...initial, {text: action.text, completed: false}];
//         default: 
//             return state;
//     }
// }

import { combineReducers} from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
    todos
})

export default rootReducer;