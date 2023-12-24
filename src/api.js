import axios from 'axios'

const chuckApi = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
})

export default chuckApi
