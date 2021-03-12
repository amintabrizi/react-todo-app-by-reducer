import React,{useContext} from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import AppContext from './../../../Contexts/AppContext';

function NavbarComponent(props) {

    const context = useContext(AppContext);

    let handleClick = () => {
        context.loginDispatch({type: 'HandleLogin'});
        context.toastStateDispatch({type: 'ToggleToast',info: {login:!context.loginState}});
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Todos Manager</Navbar.Brand>
            <Nav className="ml-auto mr-1">
                <Nav.Link href="#home">صفحه اصلی</Nav.Link>
                <Nav.Link href="#about-us">درباره ما</Nav.Link>
                <Nav.Link href="#contact-us">تماس با ما</Nav.Link>
            </Nav>
            <Button onClick={handleClick} variant={`${context.loginState ? 'danger' : 'primary'}`} className="btn-sm">{context.loginState ? 'خارج شوید' : 'وارد شوید'}</Button>
        </Navbar>
    )
}

export default NavbarComponent;