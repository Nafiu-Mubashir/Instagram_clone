import React from 'react'
function Newsfield() {
    const getPost = JSON.parse(localStorage.getItem("UsersPosts"));
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const usernames = currentUser.following.find((value) => value == value);
    // console.log(usernames);
    return (
        <>
            {getPost ? getPost.map((user, index) => (
                <div className="card mt-4 m-auto" id='card' key={index}>
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex">
                                <img src={user.picture} alt="" className='rounded-circle border' style={{ width: "40px", height: "40px" }} />
                                <p className='mt-2 ms-2'>{user.username}</p>
                            </div>
                            <i class="fa-solid fa-ellipsis mt-3"></i>
                        </div>
                        <img src={user.image} alt="" className='w-100' />
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
                            <p className='mt-2'>{user.date}</p>
                            <p className='mt-2 ms-3'>{user.time}</p>
                        </div>
                        <div className='mt-5'>
                            <div className="input-group">
                                <span className="input-group-text bg-white" id="basic-addon1" style={{ height: "50px", }}><i class="fa-solid fa-face-smile"></i></span>
                                <input type="text" className="form control" id='comment' style={{ height: "50px", }} />
                                <span className="input-group-text bg-white" id="basic-addon1" style={{ height: "50px", }}>POST</span>
                            </div>
                        </div>
                    </div>
                </div>
            )) : <div className="card mt-4 m-auto" id='card'>No posts yet</div>}
        </>
    )
}

export default Newsfield