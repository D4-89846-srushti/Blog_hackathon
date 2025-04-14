import {config }from "./config"
import axios from "axios"

export async function getMyBlogs() {
  try {
      // create the API url
      // console.log('come in')
      const url = `${config.serverUrl}/blogs/myblogs`

     const token = sessionStorage.getItem('token')
     const full_name = sessionStorage.getItem('full_name')
      // make the POST/user/register API call
      const response = await axios.get(url,{
        headers :{
          token,
          full_name,
        }
      })
      

      // return the response body to the caller
      // console.log(response.data)
      return response.data


  } catch (e) {
      console.log(`exception :`, e)

  }

}


export async function getAllBlogs() {
  try {
      // create the API url
      // console.log('come in')
      const url = `${config.serverUrl}/blogs/allblogs`

     const token = sessionStorage.getItem('token')
     const full_name = sessionStorage.getItem('full_name')
      // make the POST/user/register API call
      const response = await axios.get(url,{
        headers :{
          token,
          full_name,
        }
      })
      

      // return the response body to the caller
      // console.log(response.data)
      return response.data


  } catch (e) {
      console.log(`exception :`, e)

  }

}