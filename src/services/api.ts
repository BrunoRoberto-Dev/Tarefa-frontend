
import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefabackend.herokuapp.com'
})
 
export default api;