import {useContext} from "react";
import AuthContext from "../context/AuthContext";

export const LogOutButton = () => {
    const {logOut} = useContext(AuthContext);
    return <button onClick={logOut}>Logout</button>;
}