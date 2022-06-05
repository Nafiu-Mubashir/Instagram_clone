import React from 'react'
import user from "../assests/user-removebg-preview.png"
import { Slide } from "react-slideshow-image"
import "../components/Style.css"
function UserScroll() {
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
            <div className="card bg-white shadow mt-4 ms-auto p-3" id='card'>
                <div className='card-body'>
                    <div>
                        <Slide {...properties}>
                            <div style={style}><img src={user} alt="" id='folowerpic' /></div>
                            <div style={style}></div>
                            <div style={style}></div>
                            <div style={style}></div>
                            <div style={style}></div>
                            <div style={style}></div>
                            <div style={style}></div>
                            <div style={style}></div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserScroll