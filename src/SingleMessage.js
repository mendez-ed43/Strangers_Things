import React from 'react';

const SingleMessage = ({message}) => {
    return message ? <div style={{margin: '.2rem'}}>
      <h4>{message.fromUser.username}</h4>
        <div>{message.content}</div>
        
    </div>
    : 'Loading...'
}
 
export default SingleMessage;