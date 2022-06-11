import React, { useEffect, useState } from 'react';
import "../components/Style.css";
import { Link } from 'react-router-dom';
import iglogo from "../assests/iglogo.png";
import apple from "../assests/apple.png";
import google from "../assests/google.png";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as  yup from "yup";

function SingUp() {

    // const [email, setemail] = useState("");
    // const [mobileNum, setmobileNum] = useState("")
    // const [fullname, setfullname] = useState("");
    // const [username, setusername] = useState("");
    // const [password, setpassword] = useState("");
    // const [users, setusers] = useState([]);
    const navigate = useNavigate();
    const [erro, seterro] = useState("")
    // const ALL_USERS = JSON.parse(localStorage.getItem("InstagramUsers"));
    const toSignIn = () => {
        navigate("/")
    }
    // useEffect(() => {
    //     if (localStorage.getItem("InstagramUsers")) {
    //         setusers(ALL_USERS);
    //     }
    //     else {
    //         setusers([]);
    //     }
    // }, [])
    // const signUp = () => {
        // let findUser  = ALL_USERS.find((val, _) => val.userEmail == email || val.userName == username);
        // if (findUser) {
        //     seterro("This email or username is existing");
        //     console.log(erro);
        //     return
        // }
        // else{
        // let userList = {
        //     userEmail: email,
        //     userNum: mobileNum,
        //     fullName: fullname,
        //     userName: username,
        //     pass: password,
        //     followers: [],
        //     following: [],
        //     profilePics: "",
        //     dateOfBirth: "",
        // }
        // setusers(() => {
        //     let InstUsers = [...users, userList];
        //     localStorage.InstagramUsers = JSON.stringify(InstUsers);
        //     return InstUsers;
        // })
        // setemail("")
        // setfullname("")
        // setusername("")
        // setpassword("")
        // }
        // navigate("/")
        // console.log(userList);

    // }
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
            console.log(values);
        },
        validationSchema: yup.object({
            email: yup.string().required('This field is required'),
            fullname: yup.string().required('This field is required'),
            username: yup.string().required('This field is required').min(8,"Must not be less than 8 characters"),
            password: yup.string("Must contain at least a letter").min(8,"Must not be less than 8 characters").required('This field is required'),
        })
    })
    return (
        <>
            <div className='col-md col-lg-3 m-auto mt-lg-3'>
                <div className="card m-auto rounded shadow p-2">
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
                                <input type="email" class="form-control" id="floatingInput" placeholder="Moble Number or Email" className={formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"} name='email' onChange={formik.handleChange} value={formik.values.email}/>
                                <label for="floatingInput">Moble Number or Email</label>
                            </div>
                            {formik.touched.email && <p className='text-danger ms-auto'>{formik.errors.email}</p>}
                            <div class="form-floating  mb-2">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Full Name" className={formik.errors.fullname ? "form-control my-2 is-invalid" : "form-control my-2"} name='fullname' onChange={formik.handleChange} value={formik.values.fullname} />
                                <label for="floatingPassword">Full Name</label>
                            </div>
                            {formik.touched.fullname && <p className='text-danger ms-auto'>{formik.errors.fullname}</p>}
                            <div class="form-floating  mb-2">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Username" className={formik.errors.username ? "form-control my-2 is-invalid" : "form-control my-2"} name='username' onChange={formik.handleChange} value={formik.values.username} />
                                <label for="floatingPassword">Username</label>
                            </div>
                            {formik.touched.username && <p className='text-danger ms-auto'>{formik.errors.username}</p>}
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" className={formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"} name='password' onChange={formik.handleChange} value={formik.values.password} />
                                <label for="floatingPassword">Password</label>
                            </div>
                            {formik.touched.password && <p className='text-danger ms-auto'>{formik.errors.password}</p>}
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