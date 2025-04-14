import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { loginUser } from '../services/user'
import { toast } from 'react-toastify'


function Login() {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})




const navigate = useNavigate()


const onLogin = async () => {
    // console.log(email)
    // console.log(loginInfo)
    if (loginInfo.email.length == 0) {
        toast.warn('Please enter the email')
    } else if (loginInfo.password.length == 0) {
        toast.warn('Please enter the password')
    } else {
        // const{email}=email
        // const{password}=password
        console.log("called login")
        const {email,password}=loginInfo
        const result = await loginUser(email, password)
        console.log(result)
        if (result.status == 'success') {
            toast.success('welcome to my app')

            console.log(result.data)
            const { token  , full_name} = result.data
            // console.log(token)
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('name', full_name)

            navigate('/home')
        }
        else {
            toast.error(result.error)
        }
    }
}



  return (
    <div>
      <div className="container">
                <div className="row">

                    <div className="col"></div>
                    <div className="col">
                        <h1 className='page-header'>Login</h1>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onChange={(e) => {
                                setLoginInfo({ ...loginInfo, email: e.target.value })
                                console.log(email)
                            }}
                                type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={(e) => {
                                setLoginInfo({ ...loginInfo, password: e.target.value })
                            }}
                                type="password" className='form-control' id='password' />
                        </div>
                        <div className='mb-3'>
                            Don't have an account yet?
                            <Link to={'/register'}> Register Here</Link>
                        </div>
                        <div id="login">
                            <button onClick={onLogin} className="btn  " id='login-btn'>Login</button>
                        </div>
                    </div>

                    <div className="col"></div>


                </div>
            </div> 
    </div>
  )
}

export default Login
