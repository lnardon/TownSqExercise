import React, { Component } from 'react';
import PostPreview from './PostPreview';

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
        <div>
        {this.state.posts.map((post) => { return < PostPreview post={post} key={post.id} />})}
        </div>
    );
  }
}
