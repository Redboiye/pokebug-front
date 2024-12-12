import '../styles/Login.css'
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


// authorization konteksts, kas saglaba savu sesiju, katrs komponents zinatu ka esi ielagojies.
//tiek veidots source mapite, authContext.jsx
export const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {logIn} = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(userName, password);
            setError(null)
            navigate("/")
        } catch (e) {
            setError(e)
        }
    }
    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
