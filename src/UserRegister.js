import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const { REACT_APP_BASE_URL } = process.env;
import { callApi } from './Components'

const UserRegister = ({username, setUsername, setToken, setUser, token}) => {
    // const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
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
            if(loginResp.data) {
              const getUserData = await callApi({url: '/users/me', token: loginResp.data.token});
                // if we got back a token, get the user data
                setToken(loginResp.data.token);
                if (loginResp.data.token) {
                  history.push('/account');
                }
              }
            }}>

            <input type="text" placeholder="username" value={username} onChange = {(event) => setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'register' ? <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input> : ''
            }
            
            <button type='submit'>Submit</button>
        </form>
    
    </>
}

export default UserRegister;