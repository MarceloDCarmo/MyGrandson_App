import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-grandson.herokuapp.com/'
})

export default api