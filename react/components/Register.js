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
// import {withRouter} from "react-router-dom";
// import fakeAuth from './Common/fakeAuth';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.handleRegister = this.handleRegister.bind(this);
        //this.userLogged = this.userLogged.bind(this);
    }

    handleRegister(event) {
        //event.preventDefault();
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
            success: function(data){
                console.log(data);
                //sessionStorage.setItem('api_token', data);
                window.location.href="/";
            },
            error: function(error){
                // console.log(error);
                if(error.responseJSON) {
                    console.log(error.responseJSON);
                }
            }
        });

    };

    render() {
        return (
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <Panel>
                        <Panel.Heading>Zarejestruj się</Panel.Heading>
                        <Panel.Body>
                            <Form onSubmit={e => {
                                e.preventDefault();
                                this.handleRegister(e);}}
                            >
                                <ControlLabel>Login*</ControlLabel>
                                <FormControl
                                    id="user-name"
                                    name="user-name"
                                    type="text"
                                    required
                                    placeholder=""
                                />

                                <ControlLabel>Email*</ControlLabel>
                                <FormControl
                                    id="user-email"
                                    name="user-email"
                                    type="text"
                                    placeholder=""
                                />

                                <ControlLabel>Hasło*</ControlLabel>
                                <FormControl
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder=""
                                />
                                <ControlLabel>Powtórz hasło*</ControlLabel>
                                <FormControl
                                    id="repeat-password"
                                    name="repeat-password"
                                    type="password"
                                    required
                                    placeholder=""
                                />
                                <Col className="text-center" xs={12}>
                                    <Button type="submit">Zarejestruj</Button>
                                </Col>
                            </Form>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col sm={3}></Col>
            </Row>
        );
    }
}

export default Register