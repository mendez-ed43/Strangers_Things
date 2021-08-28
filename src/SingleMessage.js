import React from 'react';

const SingleMessage = ({message}) => {
    return message ? <div style={{margin: '.3rem'}}>
      <h4>{message.fromUser.username}</h4>
      <hr></hr>
        <div>{message.content}</div>
        
    </div>
    : 'Loading...'
}
 
export default SingleMessage;