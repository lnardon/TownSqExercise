import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

export default class FullBlogPost extends Component {
  constructor(props){
    super(props);
    const {title, body, userId} = props.location.state;
    this.state={
      modalIsOpen: false,
      id: props.match.params.id,
      userId: userId,
      username: "",
      title: title,
      body: body,
      newTitle: title,
      newBody: body
    }
  }

  handleModal = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  handleTitleChange = (text) => {
    this.setState({
      newTitle: text.target.value,
    })
  }

  handleBodyChange = (text) => {
    this.setState({
      newBody: text.target.value,
    })
  }

  handlePostUpdate = () => {
    this.setState({
      title: this.state.newTitle,
      body: this.state.newBody,
      modalIsOpen: false
    });
  }

  handlePostEditCancel = () => {
    this.setState({
      newTitle: this.state.title,
      newBody: this.state.body,
      modalIsOpen: false
    })
  }

  async componentDidMount(){
    const fetchUser = await fetch("http://jsonplaceholder.typicode.com/users");
    const creator = await fetchUser.json();
    const postCreator = creator[(this.state.userId) - 1];
    this.setState({
      userName: postCreator.name
    })
  }

  render() {
    return(
      <div>
        <Link to="./"> back </Link>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <p> Created by {this.state.userName}</p>
        <button onClick={this.handleModal}>Edit This Post</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.modal}
          ariaHideApp={false}
          contentLabel="Edit Post">
          <input type="text" onChange={ this.handleTitleChange } value={ this.state.newTitle }/>
          <input type="text" onChange={ this.handleBodyChange } value={ this.state.newBody }/>
          <button onClick={this.handlePostUpdate} > Save Changes </button>
          <button onClick={this.handlePostEditCancel} > Cancel </button>
        </Modal>
      </div>
    );
  }
}
