import { useState } from "react";
import { loginAdminFunction } from "../hooks/useApi";
import { AuthAdminContext } from "./AuthAdminContext";

export const AuthAdminProvider = ({ children }: {children: JSX.Element}) => {

    const [token, setToken] = useState<Promise<string> | null>(null);
    const [name, setName] = useState<Promise<string> | null>(null);

    const login = async (user: string, password: string) => {
       const response = await loginAdminFunction(user, password);
       console.log("opa")
       setToken(response.token);
       setName(response.name);
       console.log(token)
    }

    return (
        <AuthAdminContext.Provider value={{ token, login, name}}>
            { children }
        </AuthAdminContext.Provider>
    )
}