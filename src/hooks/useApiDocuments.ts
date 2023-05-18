import axios from "axios"

export async function newDocumentType (name: string, infos: string[], token: any) {

    const response = await axios.post('http://localhost:3334/v1/document/types', 
    {   
        name:name,
        contentArray: infos,
        },
        {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authentication': `Bearer ${token}`,
            },
          }
        )
    console.log(response)
    return response.data
  }