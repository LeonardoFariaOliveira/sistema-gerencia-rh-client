import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AuthUserContext } from '../contexts/AuthUserContext'
import EmployeeList from './EmployeeList'
import LoginUser from './LoginUser'
import { getCompany } from '../hooks/useApi'

const RequireUserAuth = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)
    const id = userContext.idUser ?? localStorage.getItem("id")
    useEffect(() => {
        getCompany(id).then(resolve => {
            console.log(resolve)
            if(resolve.status === 401)
                localStorage.clear()
            // console.log(resolve)
        })
    })


    if(userContext.tokenUser){


        const id = userContext.idUser
        // if(userContext.tokenUser){
        console.log("Contexto")
        return (
            <>
            <EmployeeList />
            </>
        )
    }
    else if(localStorage.getItem("tokenUser")){
        return (
            <>
            {
                console.log("Storage")
            }
            <EmployeeList />
            </>
        )
    }
    else{

        return (
            
            <>
                <LoginUser />
                {
                    console.log("Zerado "+localStorage.getItem("tokenUser"))
                }
            </>
        )

    }
    




    
};
export default RequireUserAuth;