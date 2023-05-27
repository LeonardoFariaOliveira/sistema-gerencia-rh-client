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

    const response = await axios.get('http://localhost:3334/v1/document/types',{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response.data
  }

  export async function getDocumentModel (id: string | undefined) {

      const response = await axios.get(`http://localhost:3334/v1/document/types/${id}/models`,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authentication": `Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response
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