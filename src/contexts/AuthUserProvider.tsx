import { useState } from 'react'
import { loginUserFunction } from "../hooks/useApi";
import { AuthUserContext } from "./AuthUserContext";

export const AuthUserProvider = ({ children }: {children: JSX.Element}) => {

    const [tokenUser, setTokenUser] = useState<Promise<string> | null>(null);
    const [popularNameUser, setPopularNameUser] = useState<Promise<string> | null>(null);
    const [idUser, setIdUser] = useState<Promise<string> | null>(null);

    const loginUser = async (user: string, password: string) => {
       // try{
            const response = await loginUserFunction(user, password);
            setTokenUser(response.token);
            setIdUser(response.id);
            setPopularNameUser(response.popularName);
            // console.log(tokenUser)
        // }catch(e){
        //     throw new Error("A")
        // }
    }

    return (
        <AuthUserContext.Provider value={{ tokenUser, loginUser, idUser, popularNameUser}}>
            { children }
        </AuthUserContext.Provider>
    )
}