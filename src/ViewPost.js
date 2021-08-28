import React from 'react';
import { useParams } from 'react-router';

import {SinglePost} from './Components';

const ViewPost = ({posts, token}) => {
    const {postId} = useParams();
    console.log('postId: ', postId);
    const [post] = posts.filter(post => post._id === postId);
    console.log('post: ', post);

    return <>
        <SinglePost post={post} />
    {/* {
        !isAuthor && <button type='submit'>Message</button>

    } */}

    
    
    
    </>
}
 
export default ViewPost;