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
                        <img src={user} alt="" id='users' />
                        <div>
                            <p className='text-dark mt-2'>{GETUSER.username} <br />{GETUSER.fullname} </p>
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