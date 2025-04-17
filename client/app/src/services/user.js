import axios from 'axios'
import { config } from "./config"

export async function userRegister(
    full_name,
    email,
    password,
    phone_no
    
) {
    try {
        // create the API url
        // console.log('come in')
        const url = `${config.serverUrl}/user/register`

        // create the request body
        const body = {
            full_name,
            email,
            password,
            phone_no
        }

        // make the POST/user/register API call
        const response = await axios.post(url,body)
        

        // return the response body to the caller
        // console.log(response.data)
        return response.data


    } catch (e) {
        console.log(`exception :`, e)

    }

}

export async function loginUser(email,password) {
    try {
        
        const url=`${config.serverUrl}/user/login`

        const body={email,password}

        // make the api call
        const response=await axios.post(url,body)
        // console.log(response.data)
        return response.data
        
    } catch (ex) {
        console.log(`exception: `,ex)
    }
    
}