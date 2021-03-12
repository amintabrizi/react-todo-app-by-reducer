
function TodoReducer(state,action) {
    switch (action.type) {
        case 'HandleSelectedTodo':
            return handleSelectedTodo(state,action);
        default:
            break;
    }
}

let handleSelectedTodo = (state,action) => {
    return action.info
}


export default TodoReducer;