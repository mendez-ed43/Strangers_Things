import { Link, useHistory } from "react-router-dom"

const Navigation = ({username, token, setToken, setUsername}) => {
    // const user = JSON.parse(localStorage.getItem('user_token'));
    const history= useHistory();
    const logOut = () => {
        setUsername('');
        setToken('');
        history.push('/account/:method');
    }

    return <>
           
        
        
        
        <nav className="navbar">
            <h1>Stranger's Things</h1>
            <div className="links">
                <Link to= "/Home">Home</Link> | 
                <Link to="/posts">For Sale</Link> | 
                <Link to="/account">My Account</Link> | 
                {/* <Link to="/account/login">Login</Link> */}
                
                {
                    token ? null : <Link to="/account/login">Login</Link>
                }

                 | <Link to ="/account/register">Register</Link>  | 
                
                
                {
                    token ? <button type='logout' onClick={logOut}>Logout</button>  : null
                }
                
                {/* <button type='logout' onClick={logOut}>Logout</button> */}


            </div>
        </nav> 

    </>
}
 
export default Navigation;