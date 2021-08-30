import React from 'react';

const SingleMessage = ({message}) => {
    return message ? 
    <div>
      <div style={{margin: '.3rem'}} className='singlemessage'>
        <h4>From: {message.fromUser.username}</h4>
        <hr></hr>
          <div>{message.content}</div>
          
      </div>
    </div>
    : 'Loading...'
}
 
export default SingleMessage;