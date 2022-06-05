import React from 'react'
import user from "../assests/user-removebg-preview.png"

function Userprofile() {
    return (
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='users' />
                        <div>
                            <p className='text-dark mt-2'>young_amir_tech <br />Mubashir Nafiu </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-4 fw-bold'>Switch</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='mt-3 ms-4 follow'>Suggestions For You</p>
                    <p className='text-dark mt-3 fw-bold follow'>See All</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>lateefahaishah <br />New to Instagram </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>haryormideh39 <br />Followed by abdulrahmanolaleru + 2 more </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>heembeecreativity01 <br />Follows you </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>assahidiyy <br />Followed by optimist_toke + 14 more </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={user} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>almubaraq25 <br />Follows you </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
                <di>
                    <a href="">About .</a>
                    <a href="">Help .</a> 
                    <a href="">Press .</a>
                    <a href="">API .</a> 
                    <a href="">Jobs .</a>
                    <a href="">Privacy .</a> 
                    <a href="">Terms .</a>
                    <a href="">Locations .</a>
                    <a href="">Language .</a><br /><br />
                    <a href="">© 2022 INSTAGRAM FROM META</a>
                </di>
            </div>
        </>
    )
}

export default Userprofile