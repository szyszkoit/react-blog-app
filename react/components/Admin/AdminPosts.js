// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';


class AdminPosts extends Component {
  constructor() {
    super();
    this.deletePost = this.deletePost.bind(this);
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
      },
      error: function(error){
        // console.log(error);
        if(error.responseJSON) {
          console.log(error.responseJSON);
        }
      }
    });
  }

  render(){

    // Get data from route props
    const posts = this.props.posts;
    console.log(posts);

    const postNode = posts.map((post) => {
      return (
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>
            <button className="btn btn-info">Edit</button>
            <span></span>
            <button className="btn btn-danger" onClick={() => { this.props.deletePost(post.id) }}>x</button></td>
        </tr>
      )
    });

    return (
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
    );
  }
}

export default AdminPosts;