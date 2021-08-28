import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {callApi} from './Components';

const { REACT_APP_BASE_URL } = process.env;
import { SinglePost , SearchBar } from './Components'

const PostsList = ({posts, setPosts, token, getPosts, searchTerm, setSearchTerm}) => {
    

    const handleDelete = async (postId) => {
        console.log('url: ', `posts/${postId}`);
        
        const respObj = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });
        console.log('respObj: ', respObj);
        await getPosts();
    }

    
    console.log("posts" , posts)

    return <>
        <h1>
            Hello
        </h1>
        <nav>
            {/* <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} posts={posts} /> */}
            <SearchBar />
        </nav>
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