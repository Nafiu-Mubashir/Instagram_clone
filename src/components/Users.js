import React from 'react'
import users from "../assests/user-removebg-preview.png"

function Users() {
    let allUsers = JSON.parse(localStorage.getItem("InstagramUsers"));
    const user = JSON.stringify(localStorage.InstagramUsers)
    // console.log(GETUSER);
    // var newArr = window.localStorage.getItem('InstagramUsers');
    // console.log(newArr);
    return (
        <>
            {allUsers.map((user) => (
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={users} alt="" id='folowerpic' />
                        <div>
                            <p className='text-dark mt-2 fs'>{user.username} <br />New to Instagram </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow'>Follow</p>
                </div>
            ))}


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
        </>
    )
}

export default Users