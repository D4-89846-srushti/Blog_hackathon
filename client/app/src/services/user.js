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
        const url = `${config.serverUrl}/user/login`

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
        return response.data


    } catch (e) {
        console.log(`exception :`, e)

    }

}

export async function loginUser(email,password) {
    try {
        
        const url=`${config.serverUrl}/user/register`

        const body={email,password}

        // make the api call
        const response=await axios.post(url,body)
        console.log(response)
        return response.data
        
    } catch (ex) {
        console.log(`exception: `,ex)
    }
    
}