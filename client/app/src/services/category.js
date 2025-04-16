import axios from 'axios';
import { config } from './config';


export async function Category(title, description) {
    try {
      // create url
      const url = `${config.serverUrl}/category/addcategory`
  
      // create body
      const body = { title, description }
  
    //   get the token
      const token = sessionStorage.getItem('token')
  
      // make the API call
      const response = await axios.post(url, body, {
        headers: {
          token, // sending the token here
        },
      }
    )
  
      // send response
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  }



  export async function getCategories() {
    try {
      // create url
      const url = `${config.serverUrl}/category/allcategories`
  
      // get the token
      const token = sessionStorage.getItem('token')
  
      // make the API call
      const response = await axios.get(url, {
        headers: {
          token,
        },
      })
  
      // send the response
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  }

  export async function deleteCategory(id) {
    try {
    
      // console.log(id)
      const url = `${config.serverUrl}/category/deletecategory/${id}`
  
      // get the token
      const token = sessionStorage.getItem('token')
  
      // make the API call
      const response = await axios.delete(url, {
        headers: {
          token,
        },
      })
  
      // send the response
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  }