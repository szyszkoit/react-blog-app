// ./components/Home.jsx
import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    Panel,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
} from 'react-bootstrap';
import {addNotification} from "../Common/notifications";
// import {withRouter} from "react-router-dom";
// import fakeAuth from './Common/fakeAuth';



class AddCommentForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //event.preventDefault();
        const self = this;
        const data = new FormData(event.target);
        $.ajax({
            type: 'POST',
            url: '/addcomment',
            data: {
                _comment: data.get('comment'),
                _postID: self.props.postID
            },
            success: function(username){
                console.log(username);
                self.props.commentsHandler(username, data.get('comment'));
                addNotification('Twój komentarz został dodany.', 'success');
                },
            error: function(error){
                // console.log(error);
                addNotification('Przy dodawaniu komentarza wystąpił błąd.', 'error');
                if(error.responseJSON) {
                    console.log(error.responseJSON);
                }
            }
        });

    };

    render() {
        return (
                <Col sm={12}>
                    <Panel>
                        <Row>
                            <Col xs={12} className="dark-division-bar">
                                <p>Dodaj komentarz</p>
                            </Col>
                        </Row>
                        <Panel.Body>
                            <Form onSubmit={e => {
                                e.preventDefault();
                                this.handleSubmit(e);}}
                            >
                                <FormGroup controlId="formControlsTextarea">
                                    <FormControl componentClass="textarea" name="comment" required minlength="10" placeholder="Treść" />
                                </FormGroup>

                                {/*<Col className="text-right" xs={12}>*/}
                                <div className="text-right">
                                    <Button type="submit" className="simple-blog-button">Wyślij</Button>
                                </div>
                                {/*</Col>*/}
                            </Form>
                            {/*<Col className="text-center login-error" xs={12}>*/}
                                {/*<p>error</p>*/}
                            {/*</Col>*/}
                        </Panel.Body>
                    </Panel>
                    <div className="notification-div"></div>
                </Col>
        );
    }
}

export default AddCommentForm