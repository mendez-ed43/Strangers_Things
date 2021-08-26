import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import callApi from './CallApi';
const { REACT_APP_BASE_URL } = process.env;

const AddNewPost = (token, setPosts, username) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setDelivery] =useState(false);
    const history = useHistory();
    
    const submitPost = async (event) => {
            event.preventDefault();
            const postResp = await callApi({
                url: '/posts', 
                method: 'POST', 
                token, 
                body: {post: {
                title,
                description,
                price,
                willDeliver
            }} 
        })
        console.log('postResp: ', postResp)
    const postsResp = await callApi({url: '/posts', token});

    setPosts(postsResp.data.posts);
    console.log('fetchUrl: ', fetchUrl);
    console.log('title: ', title);
    console.log('description: ', description);
    setTitle('');
    setDescription('');

    }

    return <>
    <h2></h2>
      <form onSubmit = {submitPost}>
        
        <label>Item for sale: </label>
        <input type="text" required placeholder="title" value={title} onChange = {(event) => setTitle(event.target.value)}/>
        <hr></hr>
        <label>Item description:</label>
        <input type="text" required placeholder="description" value={description} onChange = {(event) => setDescription(event.target.value)}/>
        <hr></hr>
        <label>Price of Item: </label>
        <input type="text" required placeholder="price" value={price} onChange = {(event) => setPrice(event.target.value)}/>
        <hr></hr>
        <label>Can be delivered?: </label>
        <select>
          <option value={setDelivery(true)}>Yes</option>
          <option value={setDelivery(false)}>No</option>
        </select>
        <hr></hr>
        <label>For sale by: {username}</label>
        <hr></hr>
        <button type='submit'>Add new post</button>

      </form>
    
    </>
  };
export default AddNewPost;