import { createContext, useState } from "react";
import { logInUser, logOutUser } from "../api/pokemonApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user")
        }
    );

    const logIn = async (username, password) => {
        const response = await logInUser(username, password);
        const userData = { username }
        setUser(username);
        localStorage.setItem('user', userData.username);
        return response;
    }
    const logOut = async () => {
        await logOutUser();
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;