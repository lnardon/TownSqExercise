import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullBlogPost from './components/FullBlogPost';
import PostsList from './components/PostsList';

class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/:id" component={FullBlogPost} />
          </Switch>
        </BrowserRouter>
    );
  }  
}

export default App;