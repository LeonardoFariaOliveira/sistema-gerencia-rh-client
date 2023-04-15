import { useContext } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { AuthUserContext } from '../contexts/AuthUserContext'
import EmployeeList from './EmployeeList'
import LoginUser from './LoginUser'

const RequireUserAuth = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)

    console.log(userContext.tokenUser)
    console.log(localStorage.token)

    if(userContext.tokenUser){
        return (
            <>
            <Header name=" S.A Suplementos " user=" usuário " />
            <Menu />
            <EmployeeList />
            </>
        )
    }else {
        return(
            <LoginUser />
        )
    }
};
export default RequireUserAuth;