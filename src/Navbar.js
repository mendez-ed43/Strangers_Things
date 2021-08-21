import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stranger's Things</h1>
            <div className="links">
                <Link to= "/Home">Home</Link> | 
                <Link to="/posts">For Sale</Link> | 
                <Link to="/account">My Account</Link> | 
                <Link to="/Register">Register</Link> |

            </div>
        </nav>

    );
}
 
export default Navbar;