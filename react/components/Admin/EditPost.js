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
import ReactQuill from 'react-quill';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';


class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            src: null,
            crop: {},
            cropped:'',
            post: {}
        }; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.onCropChange = this.onCropChange.bind(this);
        this.onCropComplete = this.onCropComplete.bind(this);
        this.onImageLoaded = this.onImageLoaded.bind(this);

    }
    componentWillMount() {
        if(this.props.posts.length > 0) {
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
    componentDidMount() {
        if(this.props.posts.length > 0) {
            console.log(this.props);
            document.getElementsByClassName('postTitle')[0].value = this.state.post[0].title;
            document.getElementsByClassName('postSlug')[0].value = this.state.post[0].slug;
            document.getElementsByClassName('postShortDescription')[0].value = this.state.post[0].description;
            document.getElementsByClassName('ql-editor')[0].innerHTML = this.state.post[0].body;


            var resultDiv = document.getElementsByClassName('crop-result');         // Create a text node
            resultDiv[0].innerHTML = '';
            var node = document.createElement("img");                 // Create a <li> node
            node.setAttribute('src', this.state.post[0].image);
            resultDiv[0].appendChild(node);
        }
    }
    onSelectFile (e) {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener(
                'load',
                () =>
                    this.setState({
                        src: reader.result,
                    }),
                false
            );
            reader.readAsDataURL(e.target.files[0])
        }
    };

    onImageLoaded(image) {
        // console.log('onCropComplete', image);
        this.setState({
            crop: makeAspectCrop({
                x: 0,
                y: 0,
                aspect: 1 / 1,
                width: 50,
            }, image.width / image.height),
        });
    };

    onCropComplete(crop, pixelCrop) {
        var myImage = new Image();
        myImage.src = this.state.src;
        var canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(
            myImage,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        // Base64
        const base64Image = canvas.toDataURL('image/jpeg');
        this.setState({cropped: base64Image});
        var resultDiv = document.getElementsByClassName('crop-result');         // Create a text node
        resultDiv[0].innerHTML = '';
        var node = document.createElement("img");                 // Create a <li> node
        node.setAttribute('src', base64Image);
        resultDiv[0].appendChild(node);
    }

    onCropChange(crop) {
        this.setState({ crop })
    };

    handleChange(value) {
        this.setState({ text: value })
    }
    handleSubmit(event) {
        //event.preventDefault();
        const self = this;
        const data = new FormData(event.target);
        console.log(data.get('title'));
        console.log(data.get('simple-title'));
        console.log(data.get('short-description'));
        console.log(this.state.text);
        console.log(this.state.cropped);
        $.ajax({
            type: 'POST',
            url: '/admin/edit-post',
            data: {
                _postId: this.state.post[0].id,
                _title: data.get('title'),
                _slug: data.get('simple-title'),
                _description: data.get('short-description'),
                _body: this.state.text,
                _image: this.state.cropped ? this.state.cropped : this.state.post[0].image
            },
            success: function(username){
                console.log(username);
                addNotification('Zmiany zostały zapisane.', 'success');
                setTimeout(function(){ window.location.href="/admin/posts";}, 2000);



                //self.props.commentsHandler(username, data.get('comment'))
            },
            error: function(error){
                // console.log(error);
                addNotification('Przy edycji postu wystąpił błąd.', 'error');
                if(error.responseJSON) {
                    //console.log(error.responseJSON);
                }
            }
        });

    };

    render() {
        return (
            <Col sm={12}>
                <Panel className="blog-panel">
                    <Panel.Heading className="blog-panel-heading">Edytuj Post</Panel.Heading>
                    <Panel.Body className="blog-panel-body">
                        <Form onSubmit={e => {
                            e.preventDefault();
                            this.handleSubmit(e);}}
                        >
                            <FormControl
                                type="text"
                                name="title"
                                placeholder="Tytuł"
                                className = "postTitle"
                            />
                            <FormControl
                                type="text"
                                name="simple-title"
                                placeholder="Nazwa uproszczona (URL)"
                                className="postSlug"
                            />
                            <FormGroup controlId="shortDescription">
                                <FormControl
                                    componentClass="textarea"
                                    name="short-description"
                                    placeholder="Krótki opis (1000 znaków)"
                                    className="postShortDescription"
                                />
                            </FormGroup>
                            <ReactQuill
                                        onChange={this.handleChange}
                                        className = "postBody"
                                        theme="snow"
                            />
                            <div>
                                <input type="file" onChange={this.onSelectFile} />
                            </div>
                            <Row className="photo-edit-div">
                                <Col sm={6}>
                                    <p>Wytnij zdjęcie:</p>
                                    {this.state.src && (
                                <ReactCrop
                                    src={this.state.src}
                                    crop={this.state.crop}
                                    onImageLoaded={this.onImageLoaded}
                                    onComplete={this.onCropComplete}
                                    onChange={this.onCropChange}
                                />
                            )}
                                </Col>
                                <Col sm={6}>
                                    <p>Wynik edycji:</p>
                                    <div className="crop-result">
                                    </div>
                                </Col>
                            </Row>
                            {/*<Col className="text-right" xs={12}>*/}
                            <Row>
                                <Col xs={12}>
                                    <div className="text-right">
                                        <Button type="submit" className="blog-button-submit">Zapisz</Button>
                                    </div>
                                </Col>
                            </Row>
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

export default EditPost