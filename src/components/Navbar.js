import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iglogo from "../assests/iglogo.png";
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const GETUSER = JSON.parse(localStorage.getItem("InstagramUsers"));
  const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
  const getPosts = JSON.parse(localStorage.getItem("UsersPosts"))
  const [post, setpost] = useState('');
  const [postCaps, setpostCaps] = useState("");
  let a = [];
  const [searchUser, setsearchUser] = useState('');
  const imageSelector = (e) => {
    let picture = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onloadend =()=> {
      setpost(reader.result);
      console.log(post);
    }
  }
  const share = () => {
    let postbj = {
      image: post,
      caption: postCaps,
      username: CurrentUser.username,
      picture: CurrentUser.profilePics,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(), 
    }
    if (getPosts) {
      localStorage.setItem("UsersPosts", JSON.stringify([...getPosts, postbj]));
      return  
    }
    else{
      localStorage.setItem("UsersPosts", JSON.stringify([postbj]));
    }
    setpost("")
    setpostCaps('')
    
  }
  const logOut = () => {
    console.log("me");
    localStorage.removeItem("CurrentUser");
    navigate("/");
  }
  return (
    <>
    {/* {CurrentUser.following.map((user, i) => (
      <ul key={i}>
        <li>{user}</li>
      </ul>
    ))} */}

      {/* <!-- Modal --> */}
      <div className="modal fade rounded" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header test-center">
              <h5 className="modal-title fs-6 tet-center" id="exampleModalLabel">Create new post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 text-center">
              {/* <i className="fa-solid fa-image fs-1"></i> */}
             {post ? <div className="row p-1 w-100">
                <div className="col-6">
                  <img src={post} style={{height:"100px", widows:"100px"}}/>
                </div>
                <div className="col-6">
                  <textarea name="" id="" className='form-control' onChange={(e) => setpostCaps(e.target.value)} value={postCaps}></textarea>
                </div>
              </div> 
              :  <div>
                {/* <i className="fa-solid fa-image fs-1"></i> */}
                <h4>Posting</h4>
              </div> }
              {/* { post && <img src={post} />  } */}
              <div className="form-group mt-2">
                <label>
                  <input type="file" hidden="hidden"  onChange={imageSelector}/>
                  <p className="btn">Select from computer</p>
                </label>
              </div>
            </div>
            <div class="modal-footer">
              {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <button type="button" class="btn" onClick={share} data-bs-dismiss="modal">share post</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white navbar-dark py-3 sticky-top deskNav">
        <div className="container">
          <Link to="/userfield" className="navbar-brand text-danger"><img src={iglogo} alt="" id='ig' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
            className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navmenu">
            <div className="input-group ms-auto" id='navInp'>
              <span className="input-group-text bg-light" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className='form-control bg-light' placeholder='Search' onChange={(e) => setsearchUser(e.target.value)} value={searchUser} name="search" />
            </div>
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-square-plus text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-gratipay text-dark"></i></Link></li>
              <div className="dropdown">
                <img src={CurrentUser.profilePics} alt="" className="dropdown-toggle rounded-circle user ms-3 border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "25px", height: "25px" }} />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='dropdown-item'><Link to="/profile" className=' text-dark'><i className="fa-solid fa-circle-user text-dark"></i> Profile</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i className="fa-solid fa-bookmark text-dark"></i> Saved</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i className="fa-solid fa-gear text-dark"></i> Settings</Link></li>
                  <li className="dropdown-item"><Link to="" className=' text-dark'><i className="fa-solid fa-repeat text-dark"></i> Switch Account</Link></li>
                  <li className='dropdown-item shadow'  onClick={logOut}><Link to="" className=' text-dark'><i className="fa-solid fa-power-off text-dark"></i> Log Out</Link></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md bg-white navbar-dark py-3 sticky-top mobileNav">
        <div className="container-fluid">
          <div className="d-flex">
            <Link to="/userfield" className="navbar-brand text-danger w-25"><img src={iglogo} alt="" id='ig' /></Link>
            <ul className="nav m-auto">
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-square-plus text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-gratipay text-dark"></i></Link></li>
              <div className="dropdown">
                <img src={CurrentUser.profilePics} alt="" className="dropdown-toggle rounded-circle user ms-3 border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "25px" }} />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='dropdown-item'><Link to="/profile" className=' text-dark'><i class="fa-solid fa-circle-user text-dark"></i> Profile</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i className="fa-solid fa-bookmark text-dark"></i> Saved</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i className="fa-solid fa-gear text-dark"></i> Settings</Link></li>
                  <li className="dropdown-item"><Link to="" className=' text-dark'><i className="fa-solid fa-repeat text-dark"></i> Switch Account</Link></li>
                  <li className='dropdown-item shadow'><Link to="" className=' text-dark'><i className="fa-solid fa-power-off text-dark"></i> Log Out</Link></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar