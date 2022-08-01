import axios from 'axios'

type ApiResponse = {
    token: string,
    expires_in: string
}

const api = axios.create({
    baseURL: 'https://my-grandson.herokuapp.com/'
})

export { api, ApiResponse}