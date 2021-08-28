import React, {useState} from 'react';
const { REACT_APP_BASE_URL } = process.env;
import callApi from './CallApi';
import SingleMessage from './SingleMessage';

const MessagesAll = ({token, messages}) => {
    console.log('messages:' , messages)




    return<>

    {
        messages.map(message => <SingleMessage key = {messages.id} message={message}>
        </SingleMessage>)
    }


    </>
}
 
export default MessagesAll;