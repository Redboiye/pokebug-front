import '../styles/NavigationBar.css';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            HomePage
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/favorites" className="navbar-link">
                            Your Favorites
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/register" className="navbar-link">
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
