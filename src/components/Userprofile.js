import React from 'react'
import { useState, useEffect } from 'react';
import user from "../assests/user-removebg-preview.png"
import Users from './Users';

function Userprofile() {
    const GETUSER = JSON.parse(localStorage.getItem("CurrentUser"));
    
    return (
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={GETUSER.profilePics} alt="" className='rounded-circle border' style={{ height: "70px" }} />
                        <div className='ms-2'>
                            <p className='text-dark mt-2'  style={{ fontSize: "18px", fontWeight: "bolder", lineHeight: "" }}>{GETUSER.username} <br /><span style={{ fontSize: "12px",fontWeight: "lighter" }}>{GETUSER.fullname}</span> </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-4 fw-bold'>Switch</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='mt-3 ms-4 follow'>Suggestions For You</p>
                    <p className='text-dark mt-3 fw-bold follow'>See All</p>
                </div>
            </div>
        </>
    )
}

export default Userprofile