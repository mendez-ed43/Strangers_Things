import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router'

const { REACT_APP_BASE_URL } = process.env;

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();



    return <>
        <h1>
            User Login | | Register
        </h1>
        <form onSubmit = {async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/users/register`
            console.log('fetchUrl: ', fetchUrl);
            console.log('Token:' , respObj.data.token)

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
            const respObj = await resp.json();
            if(respObj.data) {
                setToken(respObj.data.token);
                if(respObj.data.token) {
                    history.push('/');
                }
            }
            // console.log('Token:', respObj.data.token)
        }}>
            <input type="text" placeholder="username" value={username} onChange = {(event) => setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'register' ? <div>SECOND PASSWORD INPUT WOULD GO HERE</div> : ''
            }
            <button type='submit'>Submit</button>
        </form>
    
    </>
}

export default UserLogin;
