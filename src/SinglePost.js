import React from 'react';

const SinglePost = ({post}) => {
    return post ? <div style={{margin: '.2rem'}}>
      <h3>{post.title}</h3>
        <div>{post.description}</div>
        <div> {post.price} </div>
        <div> {post.willDeliver} </div>
        <div> {post.author.username} </div>
        <div>{ post.createdAt}</div>
    </div>
    : 'Loading...'
}
 
export default SinglePost;