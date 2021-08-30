import { Link, useHistory } from "react-router-dom"
import SearchBar from "./SearchBar";

const Navigation = ({username, token, setToken, setUsername}) => {
    // const user = JSON.parse(localStorage.getItem('user_token'));
    const history= useHistory();
    
    
    const logOut = () => {
        setUsername('');
        setToken('');
        history.push('/account/:method');
    }

    return <>
           
        
        
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container-fluid">
                <h1 className='nav_title'>Stranger's Things</h1>
                <ul className='navlinks'>
                    <Link to= "/Home">Home</Link> | 
                    <Link to="/posts">For Sale</Link> | 
                    <Link to="/account">My Account</Link> | 
    

                    {/* <Link to="/account/login">Login</Link> */}
                    
                    {
                        token ? null : <Link to="/account/login">Login</Link> 
                    }

                    {
                        token ? null : <Link to ="/account/register">Register</Link> 
                    }
                    
                    
                    
                    {
                        token ? <button type='logout' onClick={logOut}>Logout</button>  : null
                    }
                    
                    {/* <button type='logout' onClick={logOut}>Logout</button> */}


                </ul>
            </div>
        </nav>

    </>
}
 
export default Navigation;