import { useContext } from "react";
import { AuthAdminContext } from "../contexts/AuthAdminContext";
import { AuthUserContext } from "../contexts/AuthUserContext";
import axios, { AxiosResponse } from "axios";

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
  token: Promise<string> | null | string,
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
  tokenUser: Promise<string> | null | string,
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
    console.log(response)
    return response.data;
}


export async function useGetEmployees (idUser:string | Promise<string> | null) {
  
  const userContext = useContext(AuthUserContext)
  try{
    console.log(userContext.tokenUser ?? localStorage.getItem("tokenUser"))
    const response = await axios.get(`http://localhost:3333/v1/employees/${idUser}`,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${userContext.tokenUser ?? localStorage.getItem("tokenUser")}`,
      }
    })
    console.log(response)
    return response;
  }catch(e:any){
    return{
      status: e.response.status,
      data:{
        data:{
          employees:[]
        }
      }
    }
  }
}

export async function getCompany (idUser:string | Promise<string> | null) {

  // const userContext = useContext(AuthUserContext)
  try{
    console.log(localStorage.getItem("tokenUser"))
    const response = await axios.get(`http://localhost:3333/v1/companies/${idUser}`,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${localStorage.getItem("tokenUser")}`,
      }
    })
    console.log(response)
    return response;
  }catch(e:any){
    return{
      status: e.response.status,
      data:{
        data:{
          employees:[]
        }
      }
    }
  } 
}

export async function deleteCompany(id: string, token: any) {
    
  try{
    const response = await axios.delete(`http://localhost:3333/v1/companies/${id}`,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${token ?? localStorage.getItem("token")}`,
      }
    })
    return response;
  }catch(e:any){
    return{
      status: e.response.status,
      data:{
        companies:[]
      }
    }
  }
}

export async function deleteEmployee(id: string, token: any) {
    
  try{
    window.location.reload();
    const response = await axios.delete(`http://localhost:3333/v1/employees/${id}`,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${token ?? localStorage.getItem("token")}`,
      }
    })
    return response;
  }catch(e:any){
    return{
      status: e.response.status,
      data:{
        companies:[]
      }
    }
  }
}


export async function useGetCompanies () {
  const adminContext = useContext(AuthAdminContext)
    
  try{
    //const adminContext = useContext(AuthAdminContext)
    const response = await axios.get('http://localhost:3333/v1/companies',{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${adminContext.token ?? localStorage.getItem("token")}`,
      }
    })
    return response;
  }catch(e:any){
    return{
      status: e.response.status,
      data:{
        companies:[]
      }
    }
  }

}

export async function updateCompany(
  id: Promise<string> | null | string, 
  token: Promise<string> | null | string,
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
  ) {
    
  // try{
    console.log(cnpj);
    // console.log(token ?? localStorage.getItem("tokenUser"))
    const response = await axios.patch(`http://localhost:3333/v1/companies/${id}`,
    {   
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
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authentication': `Bearer ${token ?? localStorage.getItem("tokenUser")}`,
      }
    })
    return response;
  // }catch(e:any){
  //   console.log(e)
  //   return{
  //     status: e.response.status,
  //     data:{
  //       company:{}
  //     }
  //   }
  // }
}
