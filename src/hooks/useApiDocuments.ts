import axios from "axios"

export async function newDocumentType (name: string, infos: string[]) {

    const response = await axios.post('http://localhost:3334/v1/document/types', 
    {   
        name:name,
        contentArray: infos,
        },
        {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authentication': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
    return response.data
  }

  export async function getDocumentType () {
    try{
      const response = await axios.get('http://localhost:3334/v1/document/types',{
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authentication": `Bearer ${localStorage.getItem("token")}`,
        }
      });
      return response.data
    }catch(e:any){
      return{
        status: e.response.status,
        data:{
          types:[]
        }
      }
    }
  }

  export async function getDocumentModel (id: string | undefined) {
    try{
      const response = await axios.get(`http://localhost:3334/v1/document/types/${id}/models`,{
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authentication": `Bearer ${localStorage.getItem("token")}`,
        }
      });
      return response
    }catch(e:any){
      console.log("deu erro")
      return{
        status: e.response.status,
        data:{
          models:[]
        }
      }
    }
    
  }

  export async function getDocumentTypeById (id:string | undefined) {
    try{
      const response = await axios.get(`http://localhost:3334/v1/document/types/${id}`,{
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authentication": `Bearer ${localStorage.getItem("token")}`,
        }
      });
      return response.data
    }catch(e:any){
      return{
        status: e.response.status,
        data:{
          types:{}
        }
      }
    }
  }

  export async function newDocumentModel (name: string, infos: string[]) {

    const response = await axios.post('http://localhost:3334/v1/document/models', 
    {   
        name:name,
        contentArray: infos,
        },
        {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authentication': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
    return response.data

  }