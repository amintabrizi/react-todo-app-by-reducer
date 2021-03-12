
function ModalReducer(state,action) {
    switch (action.type) {
        case 'HandleModalStatus':
            return handleModalStatus(state,action);
        default:
            break
    }
}

let handleModalStatus = (state,action) => {
    return action.showStatus
}

export default ModalReducer;