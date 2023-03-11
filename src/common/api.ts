import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://swapi.dev/api"
})

apiClient.interceptors.response.use(
    (response) => {
        console.log("API", response);
        return response        
    }, 
    (error) => {
        console.log("API ERROR: ", error );
        return Promise.reject(error)   
    }
)
export default apiClient;