import axios from "axios";

//  const API_URL = "https://rickandmortyapi.com/api"
 const API_URL = "http://localhost:3000";


  export const bringAllCharacters = async () => {
     const res = await axios.get(`${API_URL}/character`)
     return res.data.results
   
  }

export const bringAllUsers = async () => {
    const res = await axios.get(`${API_URL}/api/users`)
    return res.data;
}

export const bringUserById = async (id) =>{
     const res  = await axios.get(`${API_URL}/users/${id}`)
     return res.data
}


export const userLogin =  async (credentials) => {
   const res =  await axios.post (`${API_URL}/authUser/login`,credentials)
   return res.data.token
    
}


export const getProfile = async (token) => {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const res = await axios.get(`${API_URL}users/`, config);
  
    }
