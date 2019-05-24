import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../fullBlogPostStyle.css';

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
      <div id="container">
        <Link id="backButton"to="./"> Back </Link>
        <h1 id="postTitle">{this.state.title}</h1>
        <p id="postBody">{this.state.body}</p>
        <p id="postCreator"> Created by {this.state.userName}</p>
        <button id="editButton" onClick={this.handleModal}>Edit This Post</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handlePostEditCancel}
          ariaHideApp={false}
          contentLabel="Edit Post">
            <div id="modal">
              <h1 id="modalTitleH1" > Post Title </h1>
              <textarea  id="titleInput"  type="text" onChange={ this.handleTitleChange } value={ this.state.newTitle }/>
              <h1 id="modalBodyH1" > Post Body </h1>
              <textarea id="bodyInput" type="text" onChange={ this.handleBodyChange } value={ this.state.newBody }/>
              <div id="buttonsDiv" >
                <button id="saveChangesButton"onClick={this.handlePostUpdate} > Save Changes </button>
                <button id="cancelChangesButton" onClick={this.handlePostEditCancel} > Cancel </button>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}
