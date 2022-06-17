import React from 'react'
import Navbar from "../components/Navbar";
import UserScroll from './UserScroll';
import Newsfield from './Newsfield';
import Userprofile from './Userprofile';
import Users from './Users';
function Usersfield() {

    return (
        <>
            <Navbar />
            <section className='container'>
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <UserScroll />
                        <Newsfield />
                    </div>
                    <div className="col-4" id='pro'>
                        <Userprofile />
                         <Users />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usersfield