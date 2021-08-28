import React, {useState}from 'react';
import { useParams } from 'react-router';

import { SinglePost, MessageForm } from './Components';

const ViewPost = ({posts, token,}) => {
    const [reply, setReply] =useState(false);

    // const handleMessage = () => {
    //     reply ? 
    //     // console.log('buttonclicked:')
    //     <MessageForm/> : null
        
    // }
    const {postId} = useParams();
    console.log('postId: ', postId);
    const [post] = posts.filter(post => post._id === postId);
    console.log('post: ', post)

    return <>
        <SinglePost post={post} />
        
        {
        //    token ? <button onClick={ () => 
        //     handleMessage(setReply(true)) }>Send Message?</button>  : null
        token ? <MessageForm token={token} /> : null
        }

    
    
    
    </>
}
 
export default ViewPost;