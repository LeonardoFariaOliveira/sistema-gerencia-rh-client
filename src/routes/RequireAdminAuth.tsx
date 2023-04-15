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
            <Header name=" S.A Suplementos " user=" usuário " />
            <Menu />
            <CompanyList />
            </>
        )
    }else {
        return(
            <LoginAdm />
        )
    }
};
export default RequireAdminAuth;