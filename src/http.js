import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.221.7:8000/api/',
})
