import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userRegister } from '../services/user'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



function Register() {
  const [userInfo, setUserInfo] = useState({
    full_name: '',
    email: '',
    password: '',
    phone_no: ''
    

})

const navigate = useNavigate()

const onRegister = async () => {
    console.log('hii')
    if (userInfo.full_name.length == 0) {
        toast.warn('Please Enter Name')
    } else {
        
        console.log('in')
        const { full_name, email, password, phone_no } = userInfo
        const result = await userRegister(
            full_name,
            email,
            password,
            phone_no
          
        )
        console.log(result)

        if (result['status'] == 'success') {
            toast.success('Successfully registered new user')
            navigate('/')
        }
        else {
            toast.error(result['error'])
        }
    }
}



  return (
    <div>
      <div className="container">
                <div className="row">

                    <div className="col"></div>
                    <div className="col">
                        <h1 className='page-header'>Register</h1>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <input onChange={(e) => {
                                setUserInfo({ ...userInfo, full_name: e.target.value })
                            }}
                                type="text" className="form-control" id="fullname" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onChange={(e) => {
                                setUserInfo({ ...userInfo, email: e.target.value })
                            }}
                                type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input onChange={(e) => {
                                setUserInfo({ ...userInfo, phone_no: e.target.value })
                            }}
                                type="tel" className="form-control" id="phone" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={(e) => {
                                setUserInfo({ ...userInfo, password: e.target.value })
                            }}
                                type="password" className='form-control' id='password' />
                        </div>
                       

                        <div className='mb-3'>
                            Already have an account ?
                            <Link to={'/'}>Login Here</Link>
                        </div>
                        <div className="register">


                            <button
                                onClick={onRegister}
                                className="btn"

                                id='login-btn'>
                                Register
                            </button>

                        </div>
                    </div>

                    <div className="col"></div>
                </div>
            </div>
    </div>
  )
}

export default Register
