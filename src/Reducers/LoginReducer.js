function LoginReducer(state, action) {
    switch (action.type) {
        case 'HandleLogin':
            return handleLogin(state,action);   
        default:
            return state;
    }
}


let handleLogin = (state) => {
    return !state
}



export default LoginReducer;