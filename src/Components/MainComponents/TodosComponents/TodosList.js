import React,{useEffect,useContext} from 'react';
import AxiosConfig from './../../../Axios/AxiosConfig';
import BtnsComponent from './Btns/BtnsComponent';
import './TodoList.css';
import { Tabs, Tab, ListGroup } from 'react-bootstrap';
import AppContext from './../../../Contexts/AppContext';

function TodosListComponent(props) {

    const context = useContext(AppContext)

    useEffect(() => {
        AxiosConfig.get('/todos.json')
        .then(response => {
            let responseData = response.data;
            context.todosDispatch({type:'HandleGetTodos',todos:responseData});
        })
        .catch(() => {
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'دریافت اطلاعات انجام نشد',bgColor:'danger'}})
        })
    }, []);


    let undoneTodos = context.todosState.filter(item => item.todoStatus === false)
    let doneTodos = context.todosState.filter(item => item.todoStatus === true)
    
    return (
        <section className="todo-lists my-5">
            <div className="container">
                <div className="tabs-wrapper col-8 m-auto">
                    <Tabs defaultActiveKey="undone" id="todo-status-tabs" className="justify-content-center">
                        <Tab eventKey="done" title="انجام شده">
                            <ListGroup className="border-top-0">
                                {
                                    doneTodos.map(item => {
                                        return(
                                            <ListGroup.Item key={item.todoKey} className="d-flex align-items-center">
                                                <span className="ml-auto">{item.todoTitle}</span>
                                                <BtnsComponent item={item} modalHandler={props.modalHandler} />
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="undone" title="انجام نشده">
                            <ListGroup className="border-top-0">
                                {
                                    undoneTodos.map(item => {
                                        return(
                                            <ListGroup.Item key={item.todoKey} className="d-flex align-items-center">
                                                <span className="ml-auto">{item.todoTitle}</span>
                                                <BtnsComponent item={item} modalHandler={props.modalHandler} />
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default TodosListComponent;