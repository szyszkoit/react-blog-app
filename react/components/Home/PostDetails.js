// ./src/car/car-detail.component.jsx
import React, { Component, PureComponent } from 'react';
import {Link} from 'react-router-dom';
import AddCommentForm from '../Comments/AddCommentForm';
import CommentList from "../Comments/CommentList";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from 'react-bootstrap';
import Moment from 'react-moment';

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            post: []
        };
        this.commentsHandler = this.commentsHandler.bind(this);
    }
    componentDidMount() {

      if(this.props.posts.length > 0) {
        var comments = [];
        var self = this;
        $.ajax({
          type: 'POST',
          url: '/getpostcomments',
          data: {
            _postID: self.state.post[0].id,
          },
          success: function (data) {
            self.setState({
              comments: JSON.parse(data)
            });
            // return JSON.parse(data);
          },
          error: function (error) {
            if (error.responseJSON) {
              console.log(error.responseJSON);
            }
          }
        });
      }
    };
    componentWillMount() {
      if(this.props.posts.length > 0) {
          console.log(this.props);
        var parts = window.location.href.split('/');
        var answer = parts[parts.length - 1];
        const posts = this.props.posts;
        // Car Id from param
        const slug = answer;
        // Filter car with ID
        var post = posts.filter(post => {
          if (post.slug == slug) {
            return post;
          }
        });
        this.setState({
          post: post
        })
      }
    };
    commentsHandler(username, text) {
      console.log(this.state);
      console.log(username);
      var comment = {comment: text, userName: username}
      this.setState({ comments: [...this.state.comments, comment] })
    };

    render(){

        if(this.props.posts.length == 0){
            return(
                <div></div>
            );
        }else {
            return (

                <div className="content-div post-details-div">
                    <Row>
                        <Col xs={12}>
                            <div className="post-details-title">
                                <h1>{this.state.post[0].title}</h1>
                            </div>
                        </Col>
                        <Col xs={12} className="dark-division-bar">
                            <p>
                                <Moment locale="pl" format="D MMM YYYY">
                                    {this.state.post[0].updatedat.date}
                                </Moment>
                                {/*<Moment>{this.state.post[0].updatedat.date}</Moment>*/}</p>
                        </Col>
                    </Row>
                    <Row className="post-details-text-div">
                        <div className="thumbnail">
                            <img src={this.state.post[0].image} alt={this.state.post[0].title}/>
                        </div>
                        { ReactHtmlParser(this.state.post[0].body) }
                    </Row>
                    <Row>
                        <Col xs={12} className="dark-division-bar">
                            <p>Komentarze</p>
                        </Col>
                    </Row>
                    <Row className="commentListRow">
                        <CommentList comments={this.state.comments}/>
                    </Row>
                    <Row className="addCommentRow">
                        {this.props.authenticated ? <AddCommentForm postID={this.state.post[0].id} commentsHandler = {this.commentsHandler}/> : <Col sm={8}><p>Musisz być zalogowany aby dodawać komentarze</p></Col>}
                    </Row>
                    <Row>
                      <Col sm={12}>
                          <Link to="/">
                              <button className="btn btn-default simple-blog-button">Wróć</button>
                          </Link>

                      </Col>
                    </Row>
                </div>

            )
        }
    }
}

export default PostDetails