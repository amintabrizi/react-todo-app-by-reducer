import React,{ useContext } from 'react';
import { Button } from 'react-bootstrap';
import AppContext from './../../../Contexts/AppContext'
 
function LoginFormComponent(props) {

    const context = useContext(AppContext);

    let handleClick = () => {
        context.loginDispatch({type: 'HandleLogin'});
        context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت ورود',body:'وارد شدید!',bgColor:'success'}});
    }

    return (
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center bg-dark">
            <Button onClick={handleClick} variant="primary" className="btn-lg">ورود به سایت</Button>
        </div>
    )

}

export default LoginFormComponent