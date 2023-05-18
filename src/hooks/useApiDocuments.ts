import axios from "axios"

export async function newDocumentType (name: string, infos: string[]) {

    const response = await axios.post('localhost:3334/v1/document/types', 
    {   
        name:name,
        contentArray: infos,
        })
    console.log(response)
    return response.data
  }