import { useContext } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CompanyList from './CompanyList'
import LoginAdm from './LoginAdm'
import { AuthAdminContext } from "../contexts/AuthAdminContext"

const RequireAdminAuth = (): JSX.Element => {

    const adminContext = useContext(AuthAdminContext)

    if(adminContext.token){
        return (
            <>
            <CompanyList />
            </>
        )
    }
    else if(localStorage.getItem("token")){
        return (
            <>
            <CompanyList />
            </>
        )
    }
    else {
        return(
            <LoginAdm />
        )
    }
};
export default RequireAdminAuth;