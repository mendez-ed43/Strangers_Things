import React, {useState} from 'react';
const { REACT_APP_BASE_URL } = process.env;
import callApi from './CallApi';
import SingleMessage from './SingleMessage';

const MessagesAll = ({token, messages}) => {
    console.log('messages:' , messages)




    return<>
    <h3 className='messagesheader'>Messages</h3>
    <div className='allmessages'>
        

        {
            messages.map(message => <SingleMessage key = {messages.id} message={message}>
            </SingleMessage>)
        }
    </div>

    </>
}
 
export default MessagesAll;