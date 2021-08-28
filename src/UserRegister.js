import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const { REACT_APP_BASE_URL } = process.env;
import { callApi } from './Components'

const UserRegister = ({username, setUsername, setToken, setUser, token, setMessages, setUserID}) => {
    const [password, setPassword ] = useState('');
    const[secondPassword, setSecondPassword] = useState('');
    const params = useParams();
    const history = useHistory();
    console.log('Before Submit: ' , `${params.method}` )
    
    return <>
        <h1>
        | Login User | Register User
        </h1>
        <form onSubmit = {async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/users/register`
            console.log('fetchUrl: ', fetchUrl);

            const loginResp = await callApi({
                url: `/users/${params.method}`,
                method: 'POST',
                body: {
                  user: {
                    username,
                    password
                  }
                }
              });
            console.log('ParamsUrl: ' , `${params.method}` );
            console.log('token:', loginResp.data.token)
            
            if(loginResp.data) {
              const userResp = await callApi({url: '/users/me', token: loginResp.data.token});
              console.log('setUser: ', userResp)
                // if we got back a token, get the user data
                setToken(loginResp.data.token);
                setUser(userResp.data);
                setMessages(userResp.data.messages)
                setUserID(userResp.data._id)

                if (loginResp.data.token) {
                  history.push('/account');
                }
              }
              // if (secondPassword !== password){
              //   return console.error(error);
              //}
              
            }}>

            <input type="text" placeholder="username" value={username} onChange = {(event) => setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'register' ? <input type="password" placeholder="enter password again" value={secondPassword} onChange={(event) => setSecondPassword(event.target.value)}></input> : ''
            }
            
            <button type='submit'>Submit</button>
        </form>
    
    </>
}

export default UserRegister;