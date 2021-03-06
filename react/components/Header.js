import Login from './Login';
import Register from './Register';
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Footer from "./Common/Footer";
import Contact from "./Contact/Contact";
import PostDetails from "./Home/PostDetails";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom";
import {
  Grid,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
import AdminPosts from './Admin/AdminPosts'
class Header extends Component {
  constructor(){
    super();
    this.state = {
      authenticated:false,
      admin: false

    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  };
  componentWillMount(){
      const self = this;
      $.ajax({
          type: 'POST',
          url: '/auth',
          success: function(data){
              var admin;
              if(data == 'ROLE_ADMIN'){
                admin = true;
              }else{
                admin = false
              }
              self.setState({authenticated: true, admin: admin});
          },
          error: function(error){
              if(error.responseJSON) {
                  console.log(error.responseJSON);
              }
          }
      });
  }

  onLogin (loginStatus){
    this.setState({authenticated: loginStatus});
    window.location.href="/";
  }
  onLogout (){
    this.setState({authenticated: false});
    window.location.href="/logout";
  }

  render(){

    const MyPostPage = (props) => {
      return (
        <PostDetails
          posts={this.props.posts}
          authenticated={this.state.authenticated}
          {...props}
        />
      );
    };
    const MyAdminPage = (props) => {
      return (
        <Admin
          posts={this.props.posts}
          admin={this.state.admin}
          {...props}
        />
      );
    };
    const MyLoginPage = (props) => {
          return (
              <Login
                  onLogin={this.onLogin}
                  {...props}
              />
          );
      };
      const MyRegisterPage = (props) => {
          return (
              <Register
                  onLogin={this.onLogin}
                  {...props}
              />
          );
      };

    return(

    <Router>
        <div>
        <Row>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">.blog</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                  <Link to="/">Strona Główna</Link>
              </Nav>
              <Nav pullRight>
                {/*<NavItem eventKey={1} href="#">*/}
                    {this.state.admin ? <Link to="/admin">Panel Administratora</Link> : <div></div>}
                {/*</NavItem>*/}

                  {this.state.authenticated ? <Link to="/logout" onClick={this.onLogout}>Wyloguj</Link> : <div><Link to="/login">Zaloguj się</Link><Link to="/register">Zarejestruj się</Link></div>}
                  {/*<Link to="/login">Login</Link>*/}

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Route exact path="/" render={() => (
          <Home posts={this.props.posts}/>
        )}/>
        <Route path="/post/:slug" component={MyPostPage}/>
        <Route path="/login" component={MyLoginPage}/>
        <Route path="/register" component={MyRegisterPage}/>
        <Route path="/admin" component={MyAdminPage}/>
        {/*<PrivateRoute path="/protected" component={Protected} />*/}
        </div>
    </Router>

    )
  }
}
export default Header;