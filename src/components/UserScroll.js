import React from 'react'
import user from "../assests/user-removebg-preview.png"
import { Slide } from "react-slideshow-image"
import "../components/Style.css"
function UserScroll() {
    const style = {
        // textAlign: 'center',
        // background: 'teal',
        // // padding: '30px 0',
        // width: '70px',
        // height: '70px',
        // borderRadius: '50px',
        // fontSize: '30px',
    };

    const properties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="card bg-white shadow mt-4 m-auto p-3" id='card'>
                <div className='card-body'>
                    <div>
                        <Slide {...properties} className='statusCard'>
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />
                        <img src={user} alt="" className='rounded-circle statu' style={{width: "100px",}} />

                            {/* <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div>
                            <div className='status'><img src={user} alt="" id='folowerpic' /></div> */}
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserScroll