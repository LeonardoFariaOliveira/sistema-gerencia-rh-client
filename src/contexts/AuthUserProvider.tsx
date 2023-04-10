import { useState } from 'react'
import { loginUserFunction } from "../hooks/useApi";
import { AuthUserContext } from "./AuthUserContext";

export const AuthUserProvider = ({ children }: {children: JSX.Element}) => {

    const [tokenUser, setTokenUser] = useState<Promise<string> | null>(null);

    const loginUser = async (user: string, password: string) => {
        const response = await loginUserFunction(user, password);
        setTokenUser(await response);
        console.log(tokenUser)
    }

    return (
        <AuthUserContext.Provider value={{ tokenUser, loginUser}}>
            { children }
        </AuthUserContext.Provider>
    )
}