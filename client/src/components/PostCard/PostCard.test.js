import React from 'react';
import ReactDOM from 'react-dom';
import PostCard from './PostCard';

const samplePost = {
  title: '',
  imageUrl: '',
  numberOfLikes: 56,

}

it('PostCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PostCard 
      indexValue={0}
      post={samplePost}
    />
  , div);
});