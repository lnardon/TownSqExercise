import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostPreviw extends Component {
  render() {
    return (
        <div style={{backgroundColor: 'lightgrey', fontSize: 22}}>
            <h3>{this.props.post.title}</h3>
            <Link to={{pathname: `${this.props.post.id}`, state:{title: this.props.post.title, body: this.props.post.body, userId: this.props.post.userId}}}> Read More </Link>
        </div>
    );
  }
}