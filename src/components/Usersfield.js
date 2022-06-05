import React from 'react'
import Navbar from "../components/Navbar";
import iglogo from "../assests/iglogo.png"
import apple from "../assests/apple.png"
import google from "../assests/google.png"
import { Slide } from "react-slideshow-image"
import user from "../assests/user-removebg-preview.png"
import "../components/Style.css"
function Usersfield() {
    const style = {
        textAlign: 'center',
        background: 'teal',
        // padding: '30px 0',
        width: '70px',
        height: '70px',
        borderRadius: '50px',
        fontSize: '30px',
    };

    const properties = {
        duration: 3000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: false,
        indicators: false,
    };
    return (
        <>
            <Navbar />
            <section className='container w-lg-75 w-md-100'>
                <div className="row">
                    <div className="col-lg-7 col-md-12 ms-5">
                        <div className="card bg-white shadow mt-4 p-3"  id='card'>
                            <div className='card-body'>
                                <div>
                                    <Slide {...properties}>
                                        <div style={style}>First Slide</div>
                                        <div style={style}>Second Slide</div>
                                        <div style={style}>Third Slide</div>
                                        <div style={style}>Fourth Slide</div>
                                        <div style={style}>Fifth Slide</div>
                                        <div style={style}>sixth Slide</div>
                                        <div style={style}>Seventh Slide</div>
                                        <div style={style}>Eight Slide</div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4 s" id='card'>
                            <div className="card-body">
                            <div className=''>
                            <img src={user} alt="" id='user' />
                            </div>
                                jlkhFIUGLH,JK
                            </div>
                        </div>
                    </div>
                    <div className="col-4" id='pro'>
                        <div className="mt-4">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usersfield