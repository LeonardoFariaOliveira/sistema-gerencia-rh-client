import { useState } from 'react'
import { loginUserFunction } from "../hooks/useApi";
import { AuthUserContext } from "./AuthUserContext";

export const AuthUserProvider = ({ children }: {children: JSX.Element}) => {

    const [tokenUser, setTokenUser] = useState<string | null>(null);

    const loginUser = async (user: string, password: string) => {
        const response = await loginUserFunction(user, password);
        setTokenUser(await response.toString());
        await setLocalStorage(await response.toString());
    }

    const setLocalStorage = (token: string | null) => {
        token ? localStorage.setItem('token', token) : localStorage.setItem('token', '');
        console.log( 'setou aqui ' + token)
    }

    return (
        <AuthUserContext.Provider value={{ tokenUser, loginUser}}>
            { children }
        </AuthUserContext.Provider>
    )
}