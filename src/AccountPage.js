import React, {useState} from 'react';
const { REACT_APP_BASE_URL } = process.env;

const UserAccount = ({ username, token }) => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemBody, setItemBody] = useState('');
  

  const newPostForm = () => {

    return <>
    
      <form onSubmit = {async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/posts`
            console.log('fetchUrl: ', fetchUrl);
            console.log('itemTitle: ', itemTitle);
            console.log('itemBody: ', itemBody);
            setItemTitle('');
            setItemBody('');
      }}>
        
        <label>Item for sale: </label>
        <input type="text" required placeholder="title" value={itemTitle} onChange = {(event) => setItemTitle(event.target.value)}/>
        <hr></hr>
        <label>Item description:</label>
        <input type="text" required placeholder="description" value={itemBody} onChange = {(event) => setItemBody(event.target.value)}/>
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
        username ? <h3>
        You are logged in as {username} </h3> : ''
        
        
      }
      {
        token ? newPostForm() : null
      }
    
    </>
};
 
export default UserAccount;