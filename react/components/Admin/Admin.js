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
                    // console.log(error);
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
                    //console.log(JSON.parse(data));
                    self.setState({
                        posts: JSON.parse(data)
                    })
                },
                error: function (error) {
                    // console.log(error);
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
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Nav>
                                <Link to="/admin/posts">
                                    <div className="adminTile">
                                        Posts
                                    </div>
                                </Link>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Route path="/admin/posts" component={MyAdminPostsPage}/>
                            <Route path="/admin/add-post" component={AddPost}/>
                            <Route path="/admin/edit-post/:slug" component={MyEditPostPage}/>
                        </Col>
                    </Row>
                    {/*<PrivateRoute path="/protected" component={Protected} />*/}
                </Grid>
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