import { useState } from 'react'
import { loginUserFunction } from "../hooks/useApi";
import { AuthUserContext } from "./AuthUserContext";

export const AuthUserProvider = ({ children }: {children: JSX.Element}) => {

    const [tokenUser, setTokenUser] = useState<Promise<string> | null>(null);
    const [popularNameUser, setPopularNameUser] = useState<string>('');
    const [idUser, setIdUser] = useState<Promise<string> | null>(null);

    const loginUser = async (user: string, password: string) => {
            const response = await loginUserFunction(user, password);
            setTokenUser(response.token);
            setIdUser(response.id);
            setPopularNameUser(response.popularName.toString());
            setPopularNameUser(response.popularName.toString());
            console.log(response)
            localStorage.setItem("name", response.popularName.toString())
            localStorage.setItem("tokenUser", response.token)
            localStorage.setItem("id", response.id)
    }

    return (
        <AuthUserContext.Provider value={{ tokenUser, loginUser, idUser, popularNameUser}}>
            { children }
        </AuthUserContext.Provider>
    )
}