import React, { useEffect, useState } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const PostsList = ({posts, setPosts}) => {

    // const [postsInfo, setPosts] = useState([]);
    console.log("postsInfo" , posts)
    
    useEffect(() => {
        try {
            const getPosts = async () => {
                const response = await fetch(`${REACT_APP_BASE_URL}/posts`)
                const fetchedPosts = await response.json();
                console.log("fetchedPosts" ,fetchedPosts)
                setPosts(fetchedPosts.data.posts);
        } 
        getPosts();
        } catch(error) {
            console.error(error)
        }

    }, []);

    return <>
        <h1>
            
        </h1>
            {
                posts.map (post => <div key = {post._id}>
                    <h3>
                        {post.title}
                    </h3>
                    <div>{post.description}</div>
                    <div> {post.price} </div>
                    <div> {post.createdAt} </div>
                    <div> {post.updatedAt} </div>
                
                </div>)
            }
         
    </>
    
}
export default PostsList;