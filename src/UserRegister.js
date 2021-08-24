import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const { REACT_APP_BASE_URL } = process.env;

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
            

            const resp = await fetch(`${REACT_APP_BASE_URL}/users/${params.method}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            });
            console.log('ParamsUrl: ' , `${params.method}` )
            const respObj = await resp.json();
            console.log('respObj:', respObj)
            if(respObj.data) {
                if(respObj.data.token){
                    localStorage.setItem('user_name', username);
                    localStorage.setItem('user_token', token);
                    setToken(respObj.data.token);
                    setUsername(username);
                    //  )
                    // setUser(username);
                    
                    history.push('/account');
                }
                
            }
            
                // console.log('Token:' , respObj.data.token)
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
