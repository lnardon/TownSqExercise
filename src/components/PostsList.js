import React, { Component } from 'react';
import PostPreview from './PostPreview';
import '../postListStyle.css';

export default class PostsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
  async componentDidMount(){
    let getPosts = await fetch('http://jsonplaceholder.typicode.com/posts');
    let posts = await getPosts.json();
    this.setState({ posts: posts });
  }
  render() {
    return (
        <div className="container">
          <h1 id="title"> My Lorem Blog </h1>
          <div id="postListPost">{this.state.posts.map((post) => { return < PostPreview post={post} key={post.id} />})}</div>
        </div>
    );
  }
}
