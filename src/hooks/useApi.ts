import { useContext } from "react";
import { AuthAdminContext } from "../contexts/AuthAdminContext";
import { AuthUserContext } from "../contexts/AuthUserContext";

export async function newAdmin (name: string, password: string){
  const response = await fetch('http://localhost:3333/v1/03202327', 
  {   
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        name: name,
        password: password,
      }),
    }
    )
    const data = await response.json()
    console.log(data)
  }

  export async function newCompany (
  token: string | null,
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
  
      console.log(JSON.stringify({
        email:email,
        password:password,
        corporateName: corporateName,
        popularName: popularName,
        cnpj: cnpj,
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
      }))
      
      const response = await fetch('http://localhost:3333/v1/companies', 
    {   
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authentication': `Bearer ${token}`,
      },
      body: JSON.stringify({
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
      }),
    })
    const data = await response.json()
    console.log(data)
  }

  export async function newEmployee (
  tokenUser: string | null,
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
  number: string,
  photoUrl?: string,
){
  
      console.log(JSON.stringify({
        name:name,
        CPF:cpf,
        CTPS: ctps,
        job: job,
        sector: sector,
        photoUrl: photoUrl,
        salary: salary,
        admissionDate: admissionDate,
        birthDate: birthDate,
        companyId: tokenUser,
        address:{
          country: country,
          countryArea: countryArea,
          city: city,
          neighboor: neighboor,
          street: street,
          number: number,
        }
      }))
      
      const response = await fetch('http://localhost:3333/v1/employees', 
    {   
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authentication': `Bearer ${tokenUser}`,
      },
      body: JSON.stringify({
        name:name,
        cpf:cpf,
        ctps: ctps,
        job: job,
        sector: sector,
        photoUrl: photoUrl,
        salary: salary,
        admissionDate: admissionDate,
        birthDate: birthDate,
        companyId: '281d171b-fb1e-4da4-881c-dea27a332f59',
        address:{
          country: country,
          countryArea: countryArea,
          city: city,
          neighboor: neighboor,
          street: street,
          number: number,
        }
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  
  export async function loginAdminFunction(user: string, password: string) {
    const response = await fetch("http://localhost:3333/v1/auth/login", {
      method: "POST",
      headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      user: user,
      password: password,
    }),
  });
  const data = await response.json();
  const token = data.jwtToken;
  return token;
}

export async function loginUserFunction(email: string, password: string) {
  const response = await fetch("http://localhost:3333/v1/companies/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  const token = data.jwtToken;
  return token;
}


export async function useGetEmployees () {
  const userContext = useContext(AuthUserContext)
  
  const response = await fetch('http://localhost:3333/v1/employees/281d171b-fb1e-4da4-881c-dea27a332f59',{
    headers: {
      Authentication: `Bearer ${userContext.tokenUser}`,
  }
})
    return response;
  }

export async function useGetCompanies () {
  const adminContext = useContext(AuthAdminContext)
  
  const response = await fetch('http://localhost:3333/v1/companies',{
    headers: {
      Authentication: `Bearer ${adminContext.token}`,
  }
})
    return response;
  }

