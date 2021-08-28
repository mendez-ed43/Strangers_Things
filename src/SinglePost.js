import React, { Children } from 'react';

const SinglePost = ({post, children}) => {
    return post ? <div style={{margin: '.2rem'}}>
        <li class= "for_sale">
        <h3>{post.title}</h3>
        <div>{post.description}</div>
        <div> {post.price} </div>
        <div> {post.willDeliver} </div>
        <div> {post.author.username} </div>
        <div>{ post.createdAt}</div>
        {
          children
        }
        </li>
    </div>
    : 'Loading...'
}
 
export default SinglePost;