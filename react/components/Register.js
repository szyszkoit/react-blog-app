// ./components/Home.jsx
import React, { Component } from 'react';
import {
    Grid,
    Button,
    Row,
    Col,
    Panel,
    Form,
    FormControl,
    ControlLabel,
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown
} from 'react-bootstrap';
import {addNotification} from "./Common/notifications";
// import {withRouter} from "react-router-dom";
// import fakeAuth from './Common/fakeAuth';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.handleRegister = this.handleRegister.bind(this);
        this.checkIfExist = this.checkIfExist.bind(this);
        this.checkPasswords = this.checkPasswords.bind(this);
        //this.userLogged = this.userLogged.bind(this);
    }

    checkIfExist(field) {
        //event.preventDefault();
        console.log(field, document.getElementById(field).value);
        var value = document.getElementById(field).value;
        var x = document.getElementsByClassName('form-error');
        const self = this;
        if(value != '') {
            $.ajax({
                type: 'POST',
                url: '/checkifexists/' + field + '/' + value,
                success: function (data) {
                    console.log(data);
                    document.getElementById(field).className = 'form-control valid-input-field';
                    x[0].innerHTML = ''
                    //sessionStorage.setItem('api_token', data);
                    //window.location.href="/";
                },
                error: function (error) {
                    // console.log(error);
                    document.getElementById(field).className = 'form-control invalid-input-field';
                    if(error.responseJSON == "userName"){
                        //x[0].innerHTML = '<p>Podana nazwa użytkownika jest używana.</p>'
                        addNotification('Podana nazwa użytkownika jest używana.', 'error');

                    }else if(error.responseJSON == "userEmail"){
                        //x[0].innerHTML = '<p>Podany adres email jest używany.</p>'
                        addNotification('Podany adres email jest używany.', 'error');

                    }else{
                        //x[0].innerHTML = ''
                    }
                    if (error.responseJSON) {
                        console.log(error.responseJSON);
                    }
                }
            });
        }
    };
    checkPasswords() {
        // console.log(error);
        var password = document.getElementById('password');
        var repeatPassword = document.getElementById('repeat-password');
        var x = document.getElementsByClassName('form-error');
        if(password.value != repeatPassword.value) {
            password.className = 'form-control invalid-input-field';
            repeatPassword.className = 'form-control invalid-input-field';
           //x[0].innerHTML = '<p>Podane hasła nie są identyczne.</p>';
            addNotification('Podane hasła nie są identyczne.', 'error');

        }else{
            password.className = 'form-control valid-input-field';
            repeatPassword.className = 'form-control valid-input-field';
            //x[0].innerHTML = '';
        }
    };

    handleRegister(event) {
        //event.preventDefault();
        var username = document.getElementById('userName');
        var useremail = document.getElementById('userEmail');
        var password = document.getElementById('password');
        var repeatPassword = document.getElementById('repeat-password');
        var x = document.getElementsByClassName('form-error');

        if((username.classList.contains('invalid-input-field'))||(useremail.classList.contains('invalid-input-field'))||(password.classList.contains('invalid-input-field'))){
            addNotification('Wypełnij poprawnie wszystkie pola!', 'error');
        }else{
            const self = this;
            const data = new FormData(event.target);
            $.ajax({
                type: 'POST',
                url: '/register',
                data: {
                    _username: data.get('user-name'),
                    _useremail: data.get('user-email'),
                    _password: data.get('password')
                },
                success: function (data) {
                    console.log(data);
                    //sessionStorage.setItem('api_token', data);
                    addNotification('Rejestracja przebiegła pomyślnie!', 'success');
                    setTimeout(function(){ window.location.href="/login";}, 2000);

                },
                error: function (error) {
                    // console.log(error);
                    if (error.responseJSON) {
                        console.log(error.responseJSON);
                    }
                    addNotification('Wystąpił błąd podczas rejestracji.', 'error');
                }
            });
        }
    };

    render() {
        return (
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <Panel className="blog-panel">
                        <Panel.Heading className="blog-panel-heading">Zarejestruj się</Panel.Heading>
                        <Panel.Body className="blog-panel-body">
                            <Form onSubmit={e => {
                                e.preventDefault();
                                this.handleRegister(e);}}
                            >
                                {/*<ControlLabel>Login*</ControlLabel>*/}
                                <FormControl
                                    id="userName"
                                    name="user-name"
                                    type="text"
                                    required
                                    onBlur={e => {
                                        e.preventDefault();
                                        this.checkIfExist('userName')
                                    }}
                                    minlength="5"
                                    placeholder="Login*"
                                />

                                {/*<ControlLabel>Email*</ControlLabel>*/}
                                <FormControl
                                    id="userEmail"
                                    name="user-email"
                                    type="email"
                                    required
                                    onBlur={e => {
                                        e.preventDefault();
                                        this.checkIfExist('userEmail')
                                    }}
                                    placeholder="Email*"
                                />

                                {/*<ControlLabel>Hasło*</ControlLabel>*/}
                                <FormControl
                                    id="password"
                                    name="password"
                                    type="password"
                                    minlength="5"
                                    required
                                    onBlur={e => {
                                        e.preventDefault();
                                        this.checkPasswords()
                                    }}
                                    placeholder="Hasło*"
                                />
                                {/*<ControlLabel>Powtórz hasło*</ControlLabel>*/}
                                <FormControl
                                    id="repeat-password"
                                    name="repeat-password"
                                    type="password"
                                    minlength="5"
                                    required
                                    onBlur={e => {
                                        e.preventDefault();
                                        this.checkPasswords()
                                    }}
                                    placeholder="Powtórz hasło*"
                                />
                                <Col className="text-center" xs={12}>
                                    <Button type="submit" className="blog-button-submit" >Zarejestruj</Button>
                                </Col>
                            </Form>
                            {/*<Col className="text-center" xs={12}>*/}
                                {/*<div className="form-error"></div>*/}
                            {/*</Col>*/}
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col sm={3}></Col>
                <div className="notification-div"></div>
            </Row>
        );
    }
}

export default Register