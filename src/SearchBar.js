import React, {useState} from 'react';


const SearchBar = ({searchTerm, setSearchTerm, posts}) => {

    // const postMatches = (post, text) => {


    // }
    // const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    // const poststoDisplay = searchTerm.length ? filteredPosts : posts;

    return<>
    <div className='search_bar'>
        {/* <input type='text' onChange = {e => setSearchTerm(e.targer.value)}></input> */}
        {/* <input type='text' placeholder = 'Search...' onChange = {event => {setSearchTerm(event.target.value)}}/> */}
        <input type='text' placeholder="Seach..." />

    </div>
    
    
    </>
}
 
export default SearchBar;