import React, { useEffect, useState } from 'react';
import "../components/Style.css";
import { Link } from 'react-router-dom';
import iglogo from "../assests/iglogo.png";
import apple from "../assests/apple.png";
import google from "../assests/google.png";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as  yup from "yup";
import Footer from './Footer';

function SingUp() {
    const [users, setusers] = useState([]);
    const navigate = useNavigate();
    const [erro, seterro] = useState("");
    const ALL_USERS = JSON.parse(localStorage.getItem("InstagramUsers"));
    const toSignIn = () => {
        navigate("/")
    }
    useEffect(() => {
        if (localStorage.getItem("InstagramUsers")) {
            setusers(ALL_USERS);
        }
        else {
            setusers([]);
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            fullname: "",
            // userName: "",
            password: "",
            followers: [],
            following: [],
            profilePics: "",
            dateOfBirth: "",
        },
        onSubmit: (values) => {
            setusers(() => {
               if(ALL_USERS){
                if (ALL_USERS.find((val, _) => val.email == formik.values.email || val.username == formik.values.username)) {
                    alert("Either the username or email already exist");
                    return;
                }
                else {
                    let InstUsers = [...users, values];
                    localStorage.InstagramUsers = JSON.stringify(InstUsers);
                    return InstUsers;
                }
               }
               else{
                localStorage.InstagramUsers = JSON.stringify([values]);
               }
            })
            navigate("/signup");
        },
        validationSchema: yup.object({
            email: yup.string().required('This field is required'),
            fullname: yup.string().required('This field is required'),
            username: yup.string().required('This field is required').min(8, "Must not be less than 8 characters"),
            password: yup.string("Must contain at least a letter").min(8, "Must not be less than 8 characters").required('This field is required'),
        })
    })
    return (
        <>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card m-auto rounded shadow p-2 mt-3">
                    <div className="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className="">
                                <img src={iglogo} alt="" className='d-block m-auto' />
                                <p className='text-center text-danger'>{erro}</p>
                                <p className='text text-muted  text-center'>Sign up to see photos and videos from your friends.</p>
                                <button className='btn w-100'><i class="fa-brands fa-facebook-square"></i> Login with Facebook</button>
                                <p className='text-center led mb-2'>------------------ or ------------------</p>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Moble Number or Email" className={formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"} name='email' onChange={formik.handleChange} value={formik.values.email}
                                    onBlur={formik.handleBlur} />
                                <label for="floatingInput">Moble Number or Email</label>
                            </div>
                            {formik.touched.email && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.email}</p>}
                            <div class="form-floating  mb-2">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Full Name" className={formik.errors.fullname ? "form-control my-2 is-invalid" : "form-control my-2"} name='fullname' onChange={formik.handleChange} value={formik.values.fullname}
                                    onBlur={formik.handleBlur} />
                                <label for="floatingPassword">Full Name</label>
                            </div>
                            {formik.touched.fullname && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.fullname}</p>}
                            <div class="form-floating  mb-2">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Username" className={formik.errors.username ? "form-control my-2 is-invalid" : "form-control my-2"} name='username' onChange={formik.handleChange} value={formik.values.username}
                                    onBlur={formik.handleBlur} />
                                <label for="floatingPassword">Username</label>
                            </div>
                            {formik.touched.username && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.username}</p>}
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" className={formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"} name='password' onChange={formik.handleChange} value={formik.values.password}
                                    onBlur={formik.handleBlur} />
                                <label for="floatingPassword">Password</label>
                            </div>
                            {formik.touched.password && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.password}</p>}
                            <div>
                                <p className='text text-center leds'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                                <p className="text text-center leds">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                            </div>
                            <button className='btn w-100' type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card m-auto">
                    <div className="card-body">
                        <p className='text-center mt-3'>Have an account? <span className='text-primary' onClick={toSignIn}>Log In</span></p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-2 logs'>Get the app.</p>
            <div className='w-50 m-auto'>
                <img src={apple} alt="" className='image' />
                <img src={google} alt="" className='image ms-2' />
            </div>
            <Footer />
        </>
    )
}

export default SingUp