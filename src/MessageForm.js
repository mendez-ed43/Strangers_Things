import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom'
import callApi from './CallApi';

const MessageForm = ({token}) => {
    const [message, setMessage] = useState('');
    const [content, setContent] = useState('');
    const {postId} = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        const messageResp = await callApi({
            url: `/posts/${postId}/messages`,
            method: "POST",
            token,
            body: {
                message: {
                    content
                }
            }

        })
        setMessage('');
        setContent('');

    }

    return<>
    <form onSubmit ={handleSubmit}>
        <label>Subject: </label>
        <input type="text" required placeholder="message" value={message} onChange = {(event) => setMessage(event.target.value)}/>
        <hr></hr>
        <label>Message: </label>
        <input type="text" required placeholder="content" value={content} onChange = {(event) => setContent(event.target.value)}/>
        <hr></hr>
        <button type='submit'>Send</button>
    </form>


    </>
}
 
export default MessageForm;