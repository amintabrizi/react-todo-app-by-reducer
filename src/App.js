import React,{ useReducer } from 'react';
import './App.css';
import NavbarComponent from './Components/HeaderComponents/Navbar/NavbarComponent';
import FormComponent from './Components/HeaderComponents/FormSection/FormComponent';
import TodosListComponent from './Components/MainComponents/TodosComponents/TodosList';
import ModalComponent from './Components/GeneralComponents/Modal/ModalComponent';
import LoginFormComponent from './Components/GeneralComponents/LoginForm/LoginFormComponent';
import ToastComponent from './Components/GeneralComponents/Toast/ToastComponent';
//import contexts
import AppContext from './Contexts/AppContext'

//import reducers
import LoginReducer from './Reducers/LoginReducer';
import ToastReducer from './Reducers/ToastReducer';
import ModalReducer from './Reducers/ModalReducer';
import TodoReducer from './Reducers/TodoReducer';
import SelectTodoReducer from './Reducers/SelectTodoReducer';


function App() {
  //const [modalShow, setModalShow] = React.useState(false);

  //reducers
  const [loginState, loginDispatch] = useReducer(LoginReducer,true);
  const [toastState, toastStateDispatch] = useReducer(ToastReducer,{show:false,title:'',body:'',bgColor:''});
  const [modalState, modalDispatch] = useReducer(ModalReducer,false);
  const [todosState, todosDispatch] = useReducer(TodoReducer, []);
  const [selectedTodo, selectedTodoDispatch] = useReducer(SelectTodoReducer,{});

  return (
    <AppContext.Provider value={{
      loginState,
      loginDispatch,
      toastState,
      toastStateDispatch,
      todosState,
      todosDispatch,
      modalState,
      modalDispatch,
      selectedTodo,
      selectedTodoDispatch
    }}>
      {
        loginState
        ?
        <>
          <NavbarComponent />
          <FormComponent />
          <TodosListComponent />
          <ModalComponent show={modalState} todo={selectedTodo} />
        </>
      :
      <LoginFormComponent />
      }
      <ToastComponent toastState={toastState} setToastShow={() => toastStateDispatch({type: 'OpenToast'})} />
    </AppContext.Provider>
  );
}

export default App;
