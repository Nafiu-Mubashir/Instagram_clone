/* eslint-disable no-undef */
import React, { useState } from 'react'
import "../components/Style.css"
import iglogo from "../assests/iglogo.png"
import { Link } from 'react-router-dom'
import apple from "../assests/apple.png"
import google from "../assests/google.png"
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as  yup from "yup";
import Footer from './Footer'

function SignIn() {
    const navigate = useNavigate();
    const getUser = JSON.parse(localStorage.getItem("InstagramUsers"));
    // const ALL = getUser.find((val,_) => val.email == formik.values.email)
    const toSignUp = () => {
        navigate("/signUp")
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            let userLog = getUser.find((val, _) => (val.email == formik.values.email && val.password == formik.values.password));
            if (userLog) {
                // console.log(values.email, values.password);
                localStorage.setItem("CurrentUser", JSON.stringify(userLog));
                // console.log(getUser);
                // console.log(userLog);
                navigate("/profile");
            }
            else{
                alert("Does not exist")
            }
        }
    
    })
console.log(formik.dirty);
    return (
        <>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card shadow m-auto p-2 mt-3">
                    <div className="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div>
                                <img src={iglogo} alt="" className='d-block m-auto mb-3' />
                            </div>
                            <div class="form-floating mb-2">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Phone Number, Username or Email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}  />
                                <label for="floatingInput">Phone Number, Username or Email</label>
                            </div>
                            <div class="form-floating  mb-2">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Full Name" name='password' onChange={formik.handleChange} value={formik.values.password}  onBlur={formik.handleBlur} />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button className='btn w-100' type='submit'>Login</button>
                        </form>
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
                        <p className='text-center mt-3'>Have an account? <span className='text-primary' onClick={toSignUp}>Sign Up</span></p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-2'>Get the app.</p>
            <div className='w-50 m-auto logs'>
                <img src={apple} alt="" className='image' />
                <img src={google} alt="" className='image ms-2' />
            </div>
            <Footer />
        </>
    )
}

export default SignIn