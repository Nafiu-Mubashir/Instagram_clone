import React from 'react'
import "../components/Style.css"
import iglogo from "../assests/iglogo.png"
import { Link } from 'react-router-dom'
import apple from "../assests/apple.png"
import google from "../assests/google.png"
import {useNavigate} from 'react-router-dom'


function SignIn() {
    const navigate = useNavigate();
    const toSignUp = () =>{
        navigate("/signUp")
    }
    const signIn = () => {
        navigate("/userfield")
    }
    return (
        <>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card shadow m-auto p-2">
                    <div className="card-body">
                        <div>
                            <img src={iglogo} alt="" className='d-block m-auto mb-3' />
                        </div>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Phone Number, Username or Email" />
                            <label for="floatingInput">Phone Number, Username or Email</label>
                        </div>
                        <div class="form-floating  mb-2">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Full Name" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button className='btn w-100' onClick={signIn}>Login</button>
                    </div>
                    <div className="">
                            <p className='text-center led mb-2'>------------------ or ------------------</p>
                            <p className='text-center face w-100'><i class="fa-brands fa-facebook-square"></i> Login with Facebook</p>
                        </div>
                </div>
            </div>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card shadow m-auto">
                    <div className="card-body">
                        <p className='text-center mt-3'>Have an account? <span className='text-primary' onClick={toSignUp}>Log in</span></p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-2'>Get the app.</p>
            <div className='w-50 m-auto logs'>
                <img src={apple} alt="" className='image' />
                <img src={google} alt="" className='image ms-2' />
            </div>
            <footer className='footer p-3'>
                <div className='text-center mt-3'>
                <a href="" className='text text-muted'>Meta</a>
                    <a href="" className='text text-muted'>About</a>
                    <a href="" className='text text-muted'>Blog</a>
                    <a href="" className='text text-muted'>Jobs</a>
                    <a href="" className='text text-muted'>Help</a>
                    <a href="" className='text text-muted'>API</a>
                    <a href="" className='text text-muted'>Privacy</a>
                    <a href="" className='text text-muted'>Terms</a>
                    <a href="" className='text text-muted'>Top Accounts</a>
                    <a href="" className='text text-muted'>Locations</a>
                    <a href="" className='text text-muted'>Instagram Lite</a>
                    <a href="" className='text text-muted'>Hashtags</a>
                    <a href="" className='text text-muted'>Uploading</a>
                    <a href="" className='text text-muted'>& Non-Users</a>
                </div>
                <div className='text-center mt-3'>
                <a href="" className='text text-muted'>English <i className='fa-solid fa-chevron-down text text-muted'></i></a>
                    <a href="" className='text text-muted'>© 2022 Instagram from Meta</a>
                </div>
            </footer>
        </>
    )
}

export default SignIn