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
import {Link} from "react-router-dom";
import {addNotification} from "./Common/notifications";

// import {withRouter} from "react-router-dom";
// import fakeAuth from './Common/fakeAuth';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.userLogged = this.userLogged.bind(this);
    }




    userLogged(event){
      this.props.onLogin(event)
    }

    handleLogin(event) {
        //event.preventDefault();
        const self = this;
        const data = new FormData(event.target);
        $.ajax({
            type: 'POST',
            url: loginPath,
            data: {
                _username: data.get('username'),
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
                addNotification('Błędna nazwa użytkownika lub hasło.', 'error');
            }
        });

    };

    render() {
        return (
              <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
              <Panel className="blog-panel">
                <Panel.Heading className="blog-panel-heading">Zaloguj się</Panel.Heading>
                <Panel.Body className="blog-panel-body" >
                  <Form onSubmit={e => {
                    e.preventDefault();
                    this.handleLogin(e);}}
                  >
                    {/*<ControlLabel>Login</ControlLabel>*/}
                    <FormControl
                      id="username"
                      name="username"
                      type="text"
                      required
                      minlength="5"
                      placeholder="Login"
                    />
                    {/*<ControlLabel>Hasło</ControlLabel>*/}
                    <FormControl
                      id="password"
                      name="password"
                      type="password"
                      required
                      minlength="5"
                      placeholder="Hasło"
                    />
                    <Col className="text-center" xs={12}>
                      <Button type="submit" className="blog-button-submit" >Zaloguj</Button>
                    </Col>
                      <Col className="text-center" xs={12}>
                          <p className="blog-panel-info">Nie ma jeszcze konta? <Link to="/register">Zarejestruj się.</Link></p>
                      </Col>

                  </Form>

                </Panel.Body>
              </Panel>
                  </Col>
                <Col sm={3}></Col>
                  <div className="notification-div"></div>

              </Row>
        );
    }
}

 export default Login