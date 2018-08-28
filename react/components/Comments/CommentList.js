// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col
} from 'react-bootstrap';

class CommentList extends Component {
    render(){
        if(this.props.comments.length == 0){
          return(
            <div></div>
          )
        }else {
          const comments = this.props.comments;
          //Map through cars and return linked cars
          const commentNode = comments.map((comment) => {
            return (
              <div>
                <Col sm={8}>
                  <ListGroup>
                    <ListGroupItem header={comment.userLogin}>{comment.comment}</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col sm={4}></Col>
              </div>
            );
          });
          return (
            <Row className="commentListRow">
              <Col xs={12}>
                <h3>Komentarze</h3>
              </Col>
              {commentNode}
            </Row>
          );
        }
    }
}

export default CommentList;