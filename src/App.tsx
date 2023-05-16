import React from 'react';
import GlobalStyle from './styles/globalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme/Theme';
import EmployeeList from './routes/EmployeeList';
import CompanyList from './routes/CompanyList';
import RequireAdminAuth from './routes/RequireAdminAuth';
import LogoutScreen from './routes/LogoutScreen';
import RequireUserAuth from './routes/RequireUserAuth';
import { Routes, Route } from 'react-router-dom';
import EditCompanyInfo from './routes/EditCompanyInfo';
import Documents from './routes/Documents';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={ <LogoutScreen /> }/>
      <Route path='/adm' element={ <RequireAdminAuth /> }/>
      <Route path='/user' element={ <RequireUserAuth /> }/>
      <Route path='/editCompanyInfo' element={ <EditCompanyInfo /> }/>
      <Route path='/companyList' element={ <CompanyList /> }/>
      <Route path='/employeeList' element={ <EmployeeList /> }/>
      <Route path='/employeeList' element={ <EmployeeList /> }/>
      <Route path='/documents' element={ <Documents /> }/>
    </Routes>
    </ ThemeProvider>
  );
}

export default App;