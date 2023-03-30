import React from 'react';
import GlobalStyle from './styles/globalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme/Theme';
import LoginAdm from './routes/LoginAdm';
import LoginUser from './routes/LoginUser';
import Menu from './components/Menu';
import Header from './components/Header';
import PassChange from './routes/PassChange';
import ModalNewEmployee from './components/ModalNewEmployee';
import ModalNewCompany from './components/ModalNewCompany';
import TableWrapper from './components/TableWrapper';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './routes/EmployeeList';
import CompanyList from './routes/CompanyList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <GlobalStyle />
        <Header name=" S.A Suplementos " user=" usuário " />
        <Menu />

        <Routes>
          <Route path='/' element={ <EmployeeList /> }/>
          <Route path='/companyList' element={ <CompanyList /> }/>
        </Routes>
    </ ThemeProvider>
  );
}

export default App;