import React, {useState}from 'react';
import { useParams } from 'react-router';

import { SinglePost, MessageForm } from './Components';

const ViewPost = ({posts, token, user, userID}) => {
    console.log('user: ', user)
    console.log('userID: ', userID)
    // console.log('userID: ', user.data._id)
    const [reply, setReply] =useState(false);



    // const handleMessage = (token) => {
        
    //     console.log('buttonclicked:', token)
    //     setReply(true);

    //     if (token){
    //         console.log('token exists');
    //         return <div>
    //             Token exist
    //         </div>
    //     } else {
    //         console.log('token does not exist')
    //         return <div>
    //             Token does not exist
    //         </div>
    //     }
    // }

        
    //     return(
    //     reply ? <MessageForm token={token}/> : null
    //     )
    // }
    const {postId} = useParams();
    console.log('postId: ', postId);
    const [post] = posts.filter(post => post._id === postId);
    console.log('post: ', post)

    return <>
    <div className='singlepostview'>
        <SinglePost post={post} />
        
        {
        //    token ? <button onClick={(token) => 
        //     handleMessage(token) }>Send Message?</button>  : null
        //   token && user.data._id !== post.data.author._id ? <MessageForm token={token} /> : null
            token && userID !== post.author._id ? <MessageForm token={token} /> : null

        }

    
    
    </div>
    </>
}

// code commented out was meant to use as a button that when clicked would produce the message form to send message to seller.
// Couldnt get it to work, but do want to fix it eventually, so leaving it in for future use
// Was also gonna use this same idea for adding a new post, clinking the button would produce the form in either the account page or 'For Sale' page
 
export default ViewPost;