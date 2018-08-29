// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AdminPosts extends Component {
  render(){
    return (
      <div>
        <h1>Admin posts page</h1>
        <div className="post-container">
            Posts
        </div>
      </div>
    );
  }
}

export default AdminPosts;