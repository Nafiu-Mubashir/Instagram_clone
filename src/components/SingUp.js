import React from 'react'
import "../components/Style.css"
import { Link } from 'react-router-dom'
import iglogo from "../assests/iglogo.png"
import apple from "../assests/apple.png"
import google from "../assests/google.png"
import {useNavigate} from 'react-router-dom'

function SingUp() {
    const navigate = useNavigate();
    const toSignIn = () => {
        alert("Hi")
        navigate("/")
    }
    const signUp = () => {
        
    }
    return (
        <>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card m-auto rounded shadow p-2">
                    <div className="card-body">
                        <div className="">
                            <img src={iglogo} alt="" className='d-block m-auto' />
                            <p className='text text-muted  text-center'>Sign up to see photos and videos from your friends.</p>
                            <button className='btn w-100'><i class="fa-brands fa-facebook-square"></i> Login with Facebook</button>
                            <p className='text-center led mb-2'>------------------ or ------------------</p>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Moble Number or Email" />
                            <label for="floatingInput">Moble Number or Email</label>
                        </div>
                        <div class="form-floating  mb-2">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Full Name" />
                            <label for="floatingPassword">Full Name</label>
                        </div>
                        <div class="form-floating  mb-2">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Username" />
                            <label for="floatingPassword">Username</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div>
                            <p className='text text-center leds'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                            <p className="text text-center leds">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                        </div>
                        <button className='btn w-100' onClick={signUp}>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card m-auto">
                    <div className="card-body">
                        <p className='text-center mt-3'>Have an account? <span className='text-primary' onClick={toSignIn}>Sign Up</span></p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-2 logs'>Get the app.</p>
            <div className='w-50 m-auto'>
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

export default SingUp