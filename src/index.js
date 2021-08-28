import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useHistory, useParams } from 'react-router-dom';


import {
    PostsList,
    UserRegister,
    HomePage,
    UserAccount,
    Navigation,
    callApi,
    ViewPost,
    MessageForm,
    MessagesAll
    
} from './Components'

const { REACT_APP_BASE_URL } = process.env;
console.log( "ReactUrl", `${REACT_APP_BASE_URL}`)
    
const App = () =>{
        const [username, setUsername] = useState('');
        const [posts, setPosts] = useState([]);
        const [ user, setUser ] = useState('');
        const [ userID, setUserID ] = useState('');
        const [token, setToken] = useState('');
        const [messages, setMessages] = useState([]);
        const [searchTerm, setSearchTerm ] = useState('');
        // const [content, setContent] = useState('');

        const SearchBar = ({searchTerm, setSearchTerm, posts}) => {

            const postMatches = (post, text) => {
        
        
            }
            const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
            const poststoDisplay = searchTerm.length ? filteredPosts : posts;
        
            return<>
            <div className='search_bar'>
                {/* <input type='text' onChange = {e => setSearchTerm(e.targer.value)}></input> */}
                <input type='text' placeholder = 'Search...' onChange = {event => {setSearchTerm(event.target.value)}}/>
        
            </div>
            
            
            </>
        }

        const getPosts = async () => {
            const respObj = await callApi({
                url: '/posts',
                token
            });
            // const response = await fetch(`${REACT_APP_BASE_URL}/posts`)
            //         const fetchedPosts = await response.json();
            //         console.log("fetchedPosts" ,fetchedPosts)
                    const posts = respObj.data.posts
                    if(posts) setPosts(posts);
        };

        

        useEffect(() => {
            try { 
                getPosts();
            } catch(error) {
                console.error(error)
            }
    
        }, [token]);

    return <>
        <div className="app">
            <Navigation username={username} token={token} setUsername = {setUsername} setToken= {setToken}/>
            <div className="content">
                <Switch>
                    
                    <Route exact path ='/Home'>
                        <HomePage />
                    </Route>

                    <Route exact path ='/account'>
                        <UserAccount token= {token} setToken={setToken} username={username} setPosts={setPosts} />
                        {
                            token ? <MessagesAll token={token} messages={messages}/> : null
                        }
                    </Route>
                    
                    <Route exact path="/account/:method">
                        <UserRegister setMessages={setMessages} username={username} setUsername = {setUsername} setToken= {setToken} token={token} setUser={setUser} setUserID={setUserID}/>
                    </Route>
                    
                    <Route exact path = "/posts/:postId">
                        <ViewPost posts={posts} token={token} user={user} userID={userID} SearchBar={SearchBar}/>
                    </Route>
                    
                    <Route exact path = '/posts'>
                        <PostsList posts={posts} setPosts={setPosts} token={token} getPosts={getPosts} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    </Route>
                
                </Switch>
            </div>
            <hr></hr>
        </div>


         

    
    
    
    
    
    </>
    
}
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.querySelector('#app')
  );