import React,{ useContext } from 'react';
import { Button } from 'react-bootstrap';
import AxiosConfig from './../../../../Axios/AxiosConfig';
import AppContext from './../../../../Contexts/AppContext';

function BtnsComponent(props) {

    const context = useContext(AppContext);

    let handleDelete = () => {
        AxiosConfig.delete(`/todos/${props.item.todoKey}.json`)
        .then((response) =>{
            context.todosDispatch({type: 'HandleDeleteTodo',key:props.item.todoKey});
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'وظیفه حذف شد',bgColor:'success'}});
        })
    }

    let handleTodoStatus = () => {
        AxiosConfig.put(`/todos/${props.item.todoKey}.json`,{todoKey:props.item.todoKey,todoTitle:props.item.todoTitle,todoStatus:!props.item.todoStatus})
        .then((response) => {
            context.todosDispatch({type: 'HandleEditTodoStatus',key:props.item.todoKey});
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'وظیفه ویرایش شد',bgColor:'success'}});
        })
    }

    let handleTodoTitle = (key) => {
        context.selectedTodoDispatch({type: 'HandleSelectedTodo', info: props.item})
        context.modalDispatch({type: 'HandleModalStatus',showStatus:true});
    }

    return (
        <>
            <Button onClick={handleDelete} variant="danger" className="btn-sm ml-2">پاک کردن</Button>
            <Button onClick={() => handleTodoTitle(props.item.todoKey)} variant="info" className="btn-sm ml-2">ویرایش</Button>
            <Button onClick={handleTodoStatus}  className={`btn-sm ml-2 ${props.item.todoStatus ? 'btn-success' : 'btn-warning'}`}>{props.item.todoStatus ? 'انجام شده' : 'انجام نشده'}</Button>
        </>
    )
}

export default BtnsComponent;