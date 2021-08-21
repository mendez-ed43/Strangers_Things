import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useHistory, useParams } from 'react-router-dom';

import {
    PostsList,
    UserLogin,
    Navbar,
    HomePage
} from './Components'

const { REACT_APP_BASE_URL } = process.env;
console.log( "ReactUrl", `${REACT_APP_BASE_URL}`)
    const App = () =>{
    return <>
        <div className="app">
            <Navbar />
            <div className="content">
                <Switch>
                    <Route path ='/Home'>
                        <HomePage />
                    </Route>
                    
                    <Route exact path = '/Register'>
                        <UserLogin />
                    </Route>
                    
                    <Route path = '/posts'>
                        <PostsList />
                    
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