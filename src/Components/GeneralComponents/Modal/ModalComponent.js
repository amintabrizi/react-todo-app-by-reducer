import React,{ useContext,useEffect,useState } from 'react';
import {Button,Modal,Form,InputGroup,FormControl} from 'react-bootstrap';
import AxiosConfig from './../../../Axios/AxiosConfig';
import AppContext from './../../../Contexts/AppContext';
import './ModalComponent.css';

function ModalComponent(props) {
    const context = useContext(AppContext);

    const [title, setTitle] = useState('');
    const [selectedTodo, setSelectedTodo] = useState('');
    
    useEffect(()=>{
        setTitle(props.todo.todoTitle);
    },[props.todo.todoTitle]);

    useEffect(()=>{
        setSelectedTodo(props.todo);
    },[props.todo]);

    let handleOnchange = (e) => {
        setTitle(e.target.value);
    }

    let handleEditTodo = (e) => {
        e.preventDefault();
        AxiosConfig.put(`/todos/${selectedTodo.todoKey}.json`,{todoKey:selectedTodo.todoKey,todoTitle:title,todoStatus:selectedTodo.todoStatus})
        .then((response) => {
            context.todosDispatch({type: 'HandleTodoEditTitle',info:{key: props.todo.todoKey,todoTitle:title}});
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'وظیفه ویرایش شد',bgColor:'success'}});
        })
        closeModal();
    }

    let closeModal = () => {
        context.modalDispatch({type: 'HandleModalStatus',showStatus:false});
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ویرایش وظیفه
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleEditTodo} inline className="flex-row-reverse w-100 justify-content-center direction-ltr">
                    <InputGroup size="md" className="mb-3">
                        <InputGroup.Prepend>
                            <Button type="submit" className="bg-info">ویرایش</Button>
                        </InputGroup.Prepend>
                        <FormControl onChange={(e) => handleOnchange(e)} value={title || ''} className="text-right add-todo" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>بستن</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;