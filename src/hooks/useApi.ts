import { useContext } from "react";
import { AuthAdminContext } from "../contexts/AuthAdminContext";
import { AuthUserContext } from "../contexts/AuthUserContext";
import axios from "axios";

export async function newAdmin (name: string, password: string){
  const response = await axios.post('http://localhost:3333/v1/03202327', 
  {   
    name: name,
    password: password,
  },
  {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    console.log(response)
  }

  export async function newCompany (
  token: Promise<string> | null,
  email:string,
  password: string,
  corporateName: string,
  popularName: string,
  cnpj: string,
  phoneNumber: string,
  country: string,
  countryArea: string,
  city: string,
  neighboor: string,
  street: string,
  number: string,
  photoUrl?: string,
){
  
      // console.log(JSON.stringify({
      //   email:email,
      //   password:password,
      //   corporateName: corporateName,
      //   popularName: popularName,
      //   cnpj: cnpj,
      //   photoUrl: photoUrl,
      //   phoneNumber: phoneNumber,
      //   address:{
      //     country: country,
      //     countryArea: countryArea,
      //     city: city,
      //     neighboor: neighboor,
      //     street: street,
      //     number: number,
      //   }
      // }))
      
      const response = await axios.post('http://localhost:3333/v1/companies', 
    {   
        email:email,
        password:password,
        corporateName: corporateName,
        popularName: popularName,
        CNPJ: cnpj,
        photoUrl: photoUrl,
        phoneNumber: phoneNumber,
        address:{
          country: country,
          countryArea: countryArea,
          city: city,
          neighboor: neighboor,
          street: street,
          number: number,
        }
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authentication': `Bearer ${token}`,
        },
      }
    )
    console.log(response)
  }

  export async function newEmployee (
  tokenUser: Promise<string> | null,
  name:string,
  cpf: string,
  ctps: string,
  job: string,
  sector: string,
  salary: string,
  admissionDate: string,
  birthDate: string,
  country: string,
  countryArea: string,
  city: string,
  neighboor: string,
  street: string,
  companyId: Promise<string> | null,
  number: string,
  photoUrl?: string,
){
  
      // console.log(JSON.stringify({
      //   name:name,
      //   CPF:cpf,
      //   CTPS: ctps,
      //   job: job,
      //   sector: sector,
      //   photoUrl: photoUrl,
      //   salary: salary,
      //   admissionDate: admissionDate,
      //   birthDate: birthDate,
      //   companyId: tokenUser,
      //   address:{
      //     country: country,
      //     countryArea: countryArea,
      //     city: city,
      //     neighboor: neighboor,
      //     street: street,
      //     number: number,
      //   }
      // }))
      
      const response = await axios.post('http://localhost:3333/v1/employees', 
    {   
        name:name,
        cpf:cpf,
        ctps: ctps,
        job: job,
        sector: sector,
        photoUrl: photoUrl,
        salary: salary,
        admissionDate: admissionDate,
        birthDate: birthDate,
        companyId: companyId,
        address:{
          country: country,
          countryArea: countryArea,
          city: city,
          neighboor: neighboor,
          street: street,
          number: number,
        }
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authentication': `Bearer ${tokenUser}`,
        },
      }
    )
    console.log(response)
  }
  
  export async function loginAdminFunction(user: string, password: string) {
    console.log("a")
    const response = await axios.post("http://localhost:3333/v1/auth/login", {
      user:user,
      password:password,
    })
  console.log(response)
  return response.data
}

export async function loginUserFunction(email: string, password: string) {

    const response = 
    await axios.post("http://localhost:3333/v1/companies/auth/login", {
      email:email,
      password:password,
    })
    return response.data;
}


export async function useGetEmployees (idUser:Promise<string> | null) {
  const userContext = useContext(AuthUserContext)
  
  const response = await axios.get(`http://localhost:3333/v1/employees/${idUser}`,{
    headers: {
      Authentication: `Bearer ${userContext.tokenUser}`,
  }
})
    return response;
  }

export async function useGetCompanies () {
  const adminContext = useContext(AuthAdminContext)
  
  const response = await axios.get('http://localhost:3333/v1/companies',{
    headers: {
      Authentication: `Bearer ${adminContext.token}`,
  }
})
    return response.data;
  }

