import '../styles/NavigationBar.css';
import {Link} from 'react-router-dom';
import {LogOutButton} from "./LogOutButton";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

export const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
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

                    {!user ? (<>
                            <li className="navbar-item">
                                <Link to="/login" className="navbar-link">
                                    Login
                                </Link>
                            </li>
                    </>) : (
                        <li className="navbar-item" >
                            <LogOutButton/>
                             {user.username}
                        </li>)}
                        </ul>
                        </nav>
                        </div>
                        );
                    };
