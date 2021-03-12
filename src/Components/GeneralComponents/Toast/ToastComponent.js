import React,{useContext} from 'react';
import { Toast } from 'react-bootstrap';
import AppContext from './../../../Contexts/AppContext'

function ToastComponent(props) {

    const context = useContext(AppContext);
    let closeToast = () => {
        context.toastStateDispatch({type: 'CloseToast'})
    }
    return (
        <Toast onClose={closeToast} show={props.toastState.show} delay={3000} autohide>
            <Toast.Header className={`text-white bg-${props.toastState.bgColor}`}>
                <strong className="ml-auto ml-1">{props.toastState.title}</strong>
            </Toast.Header>
            <Toast.Body className="d-flex flex-column">
                {props.toastState.body}
                <small className="mr-auto">لحظاتی پیش</small>
            </Toast.Body>
        </Toast>
    );
}

export default ToastComponent;