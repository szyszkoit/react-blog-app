//./components/About.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom";
import AdminPosts from './AdminPosts';
import AddPost from './AddPost';
import EditPost from './EditPost';
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
} from 'react-bootstrap';
class Admin extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            admin: false
        };
        this.deletePost = this.deletePost.bind(this);
    }

    componentWillUpdate(){
        if(!this.props.admin) {
            var self = this;
            $.ajax({
                type: 'POST',
                url: '/auth',
                success: function (data) {
                    //var admin;
                    if (data != 'ROLE_ADMIN') {
                        window.location.href = "/";
                    } else {
                        self.setState({admin: true})
                    }
                    //self.setState({authenticated: true, admin: admin});
                },
                error: function (error) {
                    window.location.href = "/";
                }
            });
        }
    }

    componentDidMount(){
        {
            var self = this;
            $.ajax({
                type: 'POST',
                url: getPosts,
                // data: {
                //   _username: data.get('username'),
                //   _password: data.get('password')
                // },
                success: function (data) {
                    self.setState({
                        posts: JSON.parse(data)
                    })
                },
                error: function (error) {
                    if (error.responseJSON) {
                        console.log(error.responseJSON);
                    }
                }
            });
        }
    }

    deletePost(id) {
        var array = this.state.posts;
        for(var i=0; i < array.length; i++) {
            if(array[i].id == id)
            {
                array.splice(i,1);
            }
        }

        this.setState({array});
    };
  render(){
      const MyEditPostPage = (props) => {
          return (
              <EditPost
                  posts={this.props.posts}
                  {...props}
              />
          );
      };
    const MyAdminPostsPage = (props) => {
      return (
        <AdminPosts
          posts={this.state.posts}
          deletePost={this.deletePost}
          {...props}
        />
      );
    };
    if(this.props.admin){
        return(
            <Router>
                <div>
                    <Row>
                        <Col sm={12}>
                            <Nav className="adminNav">
                                <li>
                                    <Link to="/admin/posts">
                                        <div className="adminTile">
                                            Posty
                                        </div>
                                    </Link>
                                </li>
                            </Nav>
                        </Col>
                    </Row>
                    <div className="adminContent">
                            <Route path="/admin/posts" component={MyAdminPostsPage}/>
                            <Route path="/admin/add-post" component={AddPost}/>
                            <Route path="/admin/edit-post/:slug" component={MyEditPostPage}/>
                    </div>
                    {/*<PrivateRoute path="/protected" component={Protected} />*/}
                </div>
            </Router>
        )
    }else{
        return(
            <div></div>
        )
    }
  }
}

export default Admin