import "./NavBar.css";
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/userContext';

const NavBar = () => {
    const { user, logout } = useUser();
    return (
        <header>
            <h1>System Profile</h1>
            <nav>
                <ul>
                    <li><Link to="/">Profile</Link></li>
                </ul>
            </nav>
            <div className="login-bar">
                {user && <p>Welcome, {user.email}</p>}
                {user ? <button onClick={logout}>Logout</button> : <Link to="/signin">Sign In</Link>}
            </div>
        </header>
    )
}

export default NavBar;