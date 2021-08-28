import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
const { REACT_APP_BASE_URL } = process.env;
import callApi from './CallApi';

import {MessagesAll} from './Components'

const UserAccount = ({ username, token, setPosts }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setDelivery] =useState(false);
  console.log('willDeliver:', willDeliver);
  const history = useHistory();

  
  

  const newPostForm = () => {
    
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
  console.log('title: ', title);
  console.log('description: ', description);
  setTitle('');
  setDescription('');
  history.push('./posts')

}

    return <>
    
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
        <select onChange= {(event) => setDelivery(event.target.value)}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <hr></hr>
        <label>For sale by {username}</label>
        <hr></hr>
        <button type='submit'>Add new post</button>

      </form>
    
    </>
  }



    return <>
    <h1> Your Account</h1>
      {
        token ? <h3>
        You are logged in as {username} </h3> : 'Login, or create new account.'
        
        
      }
      
      {
        token ? newPostForm() : null
      }


    
    </>
};
 
export default UserAccount;