// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    Row,
    Col
} from 'react-bootstrap';
class Home extends Component {

    render(){

        // Get data from route props
        const posts = this.props.posts;
        //Map through cars and return linked cars
        const postNode = posts.map((post) => {
          var tileStyle = {
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%'
          };
            return (
                <Row className="post-div">

                    <Col className="post-div-img" xs={4}>
                        <img src={post.image} alt=""/>
                    </Col>
                    <Col className="post-div-text" xs={8}>
                        <div className="post-div-title">
                            {post.title}
                        </div>
                        <div className="post-div-description">
                            {post.description}
                        </div>
                    </Col>

                    <Link
                    to={"/post/"+post.slug}
                    className="list-group-item more"
                    key={post.slug}>
                        <div>Zobacz więcej...</div>
                    </Link>
                </Row>
            )
        });
        return (
            <div>
                <div className="post-container">
                    {postNode}
                </div>
            </div>
        );
    }
}

export default Home;