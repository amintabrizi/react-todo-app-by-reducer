function ToastReducer(state, action) {
    switch (action.type) {
        case 'OpenToast':
            return openToast(state,action); 
        case 'CloseToast':
            return closeToast(state);
        case 'ToggleToast':
            return toggleToast(state,action)            
        default:
            return state;
    }
}

let toggleToast = (state,action) => {
    console.log(action);
    let info = action.info;
    if(info.login){
        return(
            state = {show:true,title:'وضعیت ورود',body:'وارد شدید',bgColor:'success'}
        )
    } else {
        return(
            state = {show:true,title:'وضعیت ورود',body:'خارج شدید',bgColor:'danger'}
        )
    }
    
}

let openToast = (state,action) => {
    let info = action.info;
    return(
        state = {show:info.show,title:info.title,body:info.body,bgColor:info.bgColor}
    )
}

let closeToast = (state) => {
    let copyState = {...state}
    copyState.show = false;
    return(copyState)
}


export default ToastReducer;