import { useState } from "react";
import { loginAdminFunction } from "../hooks/useApi";
import { AuthAdminContext } from "./AuthAdminContext";

export const AuthAdminProvider = ({ children }: {children: JSX.Element}) => {

    const [token, setToken] = useState<string| null>('');

    const login = async (user: string, password: string) => {
       const response = await loginAdminFunction(user, password);
       setToken(await response.toString());
       setLocalStorage(token)
    }

    const setLocalStorage = (token: any) => {
        localStorage.setItem('token', token);
    }

    return (
        <AuthAdminContext.Provider value={{ token, login}}>
            { children }
        </AuthAdminContext.Provider>
    )
}