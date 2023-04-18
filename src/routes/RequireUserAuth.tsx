import { useContext } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AuthUserContext } from '../contexts/AuthUserContext'
import EmployeeList from './EmployeeList'
import LoginUser from './LoginUser'

const RequireUserAuth = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)


    if(userContext.tokenUser){

        // if(userContext.tokenUser){
        console.log("Contexto")
        return (
            <>
            <EmployeeList />
            </>
        )

        
        // else {
        //     return(
        //         <>
        //             <LoginUser />
        //             {
                        
        //                 console.log("Segundo else: "+localStorage.getItem("token"))
        //             }
        //         </>
                
        //     )
        // }
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