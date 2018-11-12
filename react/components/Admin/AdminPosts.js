// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {addNotification} from "../Common/notifications";
import {
    Table,
    Grid,
    Row,
    Col
} from "react-bootstrap";
import EditPost from "./EditPost";


class AdminPosts extends Component {
  constructor() {
    super();
      this.state = {
          showPopup: false
      };
    this.deletePost = this.deletePost.bind(this);
    //this.addNotification = this.addNotification.bind(this);
  }

  deletePost(id) {
    const self = this;
    $.ajax({
      type: 'POST',
      url: '/deletepost',
      data: {
        _postId: id,
      },
      success: function(data){
          console.log(data);
        self.props.deletePost(id);
        addNotification('Post został pomyślnie usunięty.', 'success');
        //cleanUpNotification();
      },
      error: function(error){
        // console.log(error);
          addNotification('Post nie może zostać usunięty!', 'error');
          //cleanUpNotification();
        if(error.responseJSON) {
          console.log(error.responseJSON);
        }
      }
    });
  }

  render(){

    // Get data from route props
    const posts = this.props.posts;

    const postNode = posts.map((post) => {
      return (
        <tr>
            <td>{post.id}</td>
          <td>{post.title}</td>
          <td>
              <Link
                  to={"/admin/edit-post/"+post.slug}
                    key={post.slug}
              >
                <button className="btn btn-info">Edytuj</button>
              </Link>
            <span></span>
            {/*<button className="btn btn-danger" >x</button></td>*/}
                <Popup trigger={<button className="btn btn-danger">x</button>} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="header">
                                <p>Jesteś pewien?</p>
                            </div>
                            <div className="actions">
                                <div className="row">
                                    <div className="col-xs-6 text-center">
                                        <button className="btn btn-danger" onClick={() => { this.deletePost(post.id) }}>Usuń</button>
                                    </div>
                                    <div className="col-xs-6 text-center">
                                        <button
                                            className="btn btn-default"
                                            onClick={() => {
                                                close()
                                            }}
                                        >
                                            Anuluj
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </Popup>
          </td>
        </tr>
      )
    });

    return (
        <Row>
                <Col xs={12} className="text-right">
                    <Link to="/admin/add-post">
                        <button className="btn btn-default simple-blog-button">Add post</button>
                    </Link>
                </Col>
                <Col xs={12}>
                  <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {postNode}
                    </tbody>
                  </Table>

                </Col>
            {/*<button onClick={e => {*/}
                {/*e.preventDefault();*/}
                {/*this.addNotification('Sukces!', 'Post został pomyślnie usunięty.', 'success')}} className="btn btn-primary">*/}
                {/*Add Awesome Notification*/}
            {/*</button>*/}
            <div className="notification-div"></div>
        </Row>
    );
  }
}

export default AdminPosts;