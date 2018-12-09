import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./components/Header";
import Footer from "./components/Common/Footer";
import {
    Grid,
    Col
} from 'react-bootstrap';
class App extends React.Component {
  constructor() {super();this.state = {posts: []}}
  componentDidMount(){
    {
        var self = this;
        $.ajax({
            type: 'POST',
            url: getPosts,
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
        render() {
          return (
            <Grid>
                <Header posts={this.state.posts}/>
                <Footer />
            </Grid>
          )
        }
}
render(<App/>, document.getElementById('app'));



