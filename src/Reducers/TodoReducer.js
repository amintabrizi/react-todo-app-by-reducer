
function TodoReducer(state,action) {
    switch (action.type) {
        case 'HandleAddTodo':
            return handleAddToDO(state,action);
        case 'HandleGetTodos':
            return handleGetTodos(state,action);
        case 'HandleDeleteTodo':
            return handleDeleteTodo(state,action);
        case 'HandleEditTodoStatus':
            return handleEditTodoStatus(state,action);
        case 'HandleTodoEditTitle':
            return handleTodoEditTitle(state,action);    
        default:
            break;
    }
}

let handleAddToDO = (state,action) => {
    return [...state,action.todo]
}

let handleEditTodoStatus = (state,action) => {
    let copyState = [...state];
    let selectedTodo = copyState.find(item => item.todoKey === action.key);
    let otherTodos = copyState.filter(item => item.todoKey !== action.key);
    selectedTodo = {todoKey: selectedTodo.todoKey,todoTitle: selectedTodo.todoTitle,todoStatus: !selectedTodo.todoStatus};
    return [...otherTodos,selectedTodo];
}

let handleDeleteTodo = (state,action) => {
    let copyState = [...state];
    let newTodos = copyState.filter(item => item.todoKey !== action.key);
    return [...newTodos];
}

let handleGetTodos = (state,action) => {
    let loadedTodos = [];
    let responseData = action.todos;
    for (const item in responseData) {
        loadedTodos.push({
            todoKey:item,
            todoTitle: responseData[item].todoTitle,
            todoStatus: responseData[item].todoStatus
        })
    }
    return(loadedTodos);
}

let handleTodoEditTitle = (state,action) => {
    let todoKey = action.info.key;
    let copyTodos = [...state];
    let selectedTodo = copyTodos.find(item => item.todoKey === todoKey);
    let otherTodos = copyTodos.filter(item => item.todoKey !== todoKey);

    selectedTodo = {todoKey: selectedTodo.todoKey,todoTitle: action.info.todoTitle,todoStatus: selectedTodo.todoStatus}

    return [...otherTodos,selectedTodo];
}


export default TodoReducer;