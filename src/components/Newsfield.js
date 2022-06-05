import React from 'react'
import food from "../assests/food.jpeg"
import user from "../assests/user-removebg-preview.png"
function Newsfield() {
    return (
        <>
            <div className="card mt-4 ms-auto" id='card'>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <div className="d-flex">
                            <img src={user} alt="" id='userField' />
                            <p className='mt-2'>the_young</p>
                        </div>
                        <i class="fa-solid fa-ellipsis mt-3"></i>
                    </div>
                    <img src={food} alt="" className='w-100' />
                    <div className='mt-2 w-100 d-flex justify-content-between'>
                        <div>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-comment ms-2"></i>
                            <i class="fa-solid fa-paper-plane ms-2"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="d-flex">
                            <img src={user} alt="" className='' id='userField' />
                            <p className='mt-2'>the_young</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Newsfield