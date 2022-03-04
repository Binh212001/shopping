
import axios from "axios"
import queryString from 'query-string'



export const APIClinet = axios.create({
  baseURL : 'https://fakestoreapi.com',
  headers:{
    'content-type':'application/json'
  },
  paramsSerializer : params => queryString.stringify(params)
})

APIClinet.interceptors.request.use(async(config)=>{
 
  return config;
})
APIClinet.interceptors.response.use((response)=>{
  if(response && response.data){
    return response
  }
},(error)=>{
  
  throw error
})

