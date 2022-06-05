import React from 'react'
import Navbar from "../components/Navbar";
import UserScroll from './UserScroll';
import Newsfield from './Newsfield';
import Userprofile from './Userprofile';
function Usersfield() {

    return (
        <>
            <Navbar />
            <section className='container w-lg-75 w-md-100'>
                <div className="row">
                    <div className="col-lg-7 col-md-12 ms-5">
                        <UserScroll />
                        <Newsfield />
                    </div>
                    <div className="col-4" id='pro'>
                        <Userprofile />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usersfield