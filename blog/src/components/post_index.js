import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostIndex extends Component {

  //when the action creator will be called?
  //usually after some event... but which?
  //called immediately when this component appeared in DOM
  //it's React's lifecycle method
  //don't make typo in this function name!
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    _.map(this.props.posts, post=>{
        return (
          <li className="list-group-item" key="{post.id}">
            {post.title}
          </li>
        )
    });
  }

  render(){
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts : state.posts};
}

//ES6: equals to {fetchPosts:fetchPosts}
export default connect(mapStateToProps, {fetchPosts})(PostIndex);