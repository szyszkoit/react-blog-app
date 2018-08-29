//./components/About.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom";
import AdminPosts from './AdminPosts';
import AdminUsers from './AdminUsers';
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
class Admin extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: sessionStorage.getItem('api_token')? true : false

    };
  };
  render(){
    return(
      <Router>
        <Grid>
          <Row>
            <Col sm={3}>
              <Nav>

                  <Link to="/admin/posts">
                    <NavItem eventKey={1} href="#">
                      Posts
                    </NavItem>
                  </Link>


                  <Link to="/admin/users">
                    <NavItem eventKey={2} href="#">
                      Users
                    </NavItem>
                  </Link>

              </Nav>
            </Col>
            <Col sm={9}>
              <Route path="/admin/posts" component={AdminPosts}/>

              <Route path="/admin/users" component={AdminUsers}/>
            </Col>
          </Row>
          {/*<PrivateRoute path="/protected" component={Protected} />*/}
        </Grid>
      </Router>
    )
  }
}

export default Admin