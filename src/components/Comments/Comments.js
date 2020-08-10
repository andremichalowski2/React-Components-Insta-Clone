import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {comments.map(i => 
        <Comment comment={i} />
      )};
    </div>
  );
};

export default Comments;
