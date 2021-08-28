import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {callApi} from './Components';

const { REACT_APP_BASE_URL } = process.env;
import { SinglePost } from './Components'

const PostsList = ({posts, setPosts, token, getPosts}) => {
    

    const handleDelete = async (postID) => {
        console.log('url: ', `posts/${postID}`);
        
        const respObj = await callApi({
            method: 'DELETE',
            url: `/posts/${postID}`,
            token
        });
        console.log('respObj: ', respObj);
        await getPosts();
    }

    
    console.log("posts" , posts)

    return <>
        <h1>
            
        </h1>
            {
                
                posts.map (post => <SinglePost key = {post._id} post={post} token={token} >
                    
                    <Link to = {`/posts/${post._id}`}>Details</Link>
                    {
                    token && post.isAuthor && <button onClick={() => 
                    handleDelete(post._id) }>DELETE</button>
                    }
                    </SinglePost>)
            }
         
    </>
    
}
export default PostsList;