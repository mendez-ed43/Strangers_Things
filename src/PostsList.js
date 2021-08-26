import React, { useEffect, useState } from 'react';

const { REACT_APP_BASE_URL } = process.env;
import { SinglePost } from './Components'

const PostsList = ({posts, setPosts}) => {

    // const [postsInfo, setPosts] = useState([]);
    console.log("postsInfo" , posts)
    
    // useEffect(() => {
    //     try {
    //         const getPosts = async () => {
    //             const response = await fetch(`${REACT_APP_BASE_URL}/posts`)
    //             const fetchedPosts = await response.json();
    //             console.log("fetchedPosts" ,fetchedPosts)
    //             setPosts(fetchedPosts.data.posts);
    //     } 
    //     getPosts();
    //     } catch(error) {
    //         console.error(error)
    //     }

    // }, []);

    return <>
        <h1>
            
        </h1>
            {
                posts.map (post => <SinglePost key = {post._id} post={post} />)
            }
         
    </>
    
}
export default PostsList;