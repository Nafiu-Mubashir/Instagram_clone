import React from 'react'
import { Link } from 'react-router-dom'
import user from "../assests/user-removebg-preview.png"
import iglogo from "../assests/iglogo.png"
import { useState } from 'react';

function Navbar() {
  const GETUSER = JSON.parse(localStorage.getItem("InstagramUsers"));
  let u;
  let a = [];
      GETUSER.map(item => {
      console.log(item);
      u = item.username;
      a.push(u)
    })
    console.log(a);
    // console.log(u);
  console.log(GETUSER);
  const [searchUser, setsearchUser] = useState('');
  return (
    <>
   {/* <ul>
        {a
          .filter(name => name.match(new RegExp(searchUser, "i")))
          .map(name => {
            return <li>{name} </li>
          })}
      </ul> */}

      {/* <!-- Modal --> */}
      <div className="modal fade rounded" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header test-center">
              <h5 className="modal-title fs-6 tet-center" id="exampleModalLabel">Create new post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 text-center">
              <i className="fa-solid fa-image fs-1"></i>
              <div className="form-group mt-2">
                <label>
                  <input type="file" hidden="hidden" />
                  <p className="btn">Select from computer</p>
                </label>
              </div>
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
              <input type="text" className='form-control bg-light' placeholder='Search' onChange={(e) => setsearchUser(e.target.value)} value={searchUser} name="search"/>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-square-plus text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i className="fa-brands fa-gratipay text-dark"></i></Link></li>
              <div className="dropdown">
                <img src={user} alt="" className="dropdown-toggle user" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='dropdown-item'><Link to="/profile" className=' text-dark'><i className="fa-solid fa-circle-user text-dark"></i> Profile</Link></li>
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
                <img src={user} alt="" className="dropdown-toggle user" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
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