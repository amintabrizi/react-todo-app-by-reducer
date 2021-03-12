import React,{ useContext,useState } from 'react';
import './FormComponent.css';
import { Form, FormControl, Button,InputGroup} from 'react-bootstrap';
import AppContext from './../../../Contexts/AppContext';
import AxiosConfig from './../../../Axios/AxiosConfig';

function FormComponent(props) {

    const context = useContext(AppContext);
    const [title, setTitle] = useState('');

    let handleOnchange = (e) => {
        setTitle(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        AxiosConfig.post('/todos.json',{todoTitle:title,todoStatus:false})
        .then((response) => {
            context.todosDispatch({type:'HandleAddTodo',todo:{todoKey:response.data.name,todoTitle:title,todoStatus:false}});
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'وظیفه ایجاد شد!',bgColor:'success'}});
        })
        .catch(error => {
            context.toastStateDispatch({type: 'OpenToast',info:{show:true,title:'وضعیت درخواست',body:'درخواست به مشکل خورد',bgColor:'danger'}});
        });
    }

    return (
        <section className="form-wrapper">
            <div className="container d-flex justify-content-center align-items-center">
                <Form onSubmit={(e) => handleSubmit(e)} inline className="flex-row-reverse w-100 justify-content-center direction-ltr">
                    <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                            <Button type="submit" className="bg-primary">!اضافه کن</Button>
                        </InputGroup.Prepend>
                        <FormControl onChange={(e) => handleOnchange(e)} className="text-right add-todo" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form>
            </div>
        </section>
    )
}

export default FormComponent;