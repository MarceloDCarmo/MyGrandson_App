import axios from 'axios'

type AxiosResponse = {
        token: string,
        expires_in: string
}

const api = axios.create({
    baseURL: 'https://my-grandson.herokuapp.com/'
})

export { api, AxiosResponse }