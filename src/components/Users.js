import React from 'react'
import { useState } from 'react';
import users from "../assests/user-removebg-preview.png"

function Users() {
    const allUsers = JSON.parse(localStorage.getItem("InstagramUsers"));
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const filterUser = allUsers.filter((val) => val.username !== currentUser.username);
    const user = JSON.stringify(localStorage.InstagramUsers);
    const [follow, setfollow] = useState("Follow");
    const [following, setfollowing] = useState("Following");
    const folow = (u) => {
        let toFollow = allUsers.find((val, ind) => val.username == u);
        let findUser = currentUser.following.find((value => value == toFollow.username));
        if (findUser) {
            alert('You are already a follower');
            return;
        }
        else{
            currentUser.following.push(toFollow.username);
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email === toFollow.email) {
                    allUsers[i].followers = [...allUsers[i].followers, currentUser.username];
                }

                if (allUsers[i].email === currentUser.email) {
                    allUsers[i].following = [...allUsers[i].following, toFollow.username];
                }
            }
        }
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        localStorage.setItem("InstagramUsers", JSON.stringify(allUsers));
    }
    return (
        <>
            {filterUser.map((user, index) => (
                <div className="d-flex justify-content-between" key={index}>
                    <div className="d-flex">
                        <img src={user.profilePics} alt="" id='folowrpic' className="rounded-circle border" style={{width: "50px", height: "50px",cursor: "pointer"}}/>
                        <div className='ms-2'>
                            <p className='text-dark mt-2 fs'>{user.username} <br />New to Instagram </p>
                            <p className=''></p>
                        </div>
                    </div>
                    <p className='text-primary mt-3 fw-bold follow' onClick={() => folow(user.username)}>{follow}</p>
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