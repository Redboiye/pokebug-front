import {createContext, useState} from "react";
import {logInUser, logOutUser} from "../api/pokemonApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const logIn = async (username, password) => {
        const response = await logInUser(username, password);
        setUser({username});
        return response;
    }
    const logOut = async () => {
        await logOutUser();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;