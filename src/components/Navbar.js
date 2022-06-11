import React from 'react'
import { Link } from 'react-router-dom'
import user from "../assests/user-removebg-preview.png"
import iglogo from "../assests/iglogo.png"
function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-dark py-3 sticky-top deskNav">
        <div className="container">
          <Link to="/userfield" className="navbar-brand text-danger"><img src={iglogo} alt="" id='ig' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
            className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navmenu">
            <div class="input-group ms-auto" id='navInp'>
              <span class="input-group-text bg-light" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className='form-control bg-light' placeholder='Search' />
            </div>
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-square-plus text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-brands fa-gratipay text-dark"></i></Link></li>
              <div className="dropdown">
                <img src={user} alt="" className="dropdown-toggle user" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='dropdown-item'><Link to="/profile" className=' text-dark'><i class="fa-solid fa-circle-user text-dark"></i> Profile</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i class="fa-solid fa-bookmark text-dark"></i> Saved</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i class="fa-solid fa-gear text-dark"></i> Settings</Link></li>
                  <li className="dropdown-item"><Link to="" className=' text-dark'><i class="fa-solid fa-repeat text-dark"></i> Switch Account</Link></li>
                   <li className='dropdown-item shadow'><Link to="" className=' text-dark'><i class="fa-solid fa-power-off text-dark"></i> Log Out</Link></li>
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
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-square-plus text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="" className='nav-link text-white'><i class="fa-brands fa-gratipay text-dark"></i></Link></li>
              <div className="dropdown">
                <img src={user} alt="" className="dropdown-toggle user" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='dropdown-item'><Link to="/profile" className=' text-dark'><i class="fa-solid fa-circle-user text-dark"></i> Profile</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i class="fa-solid fa-bookmark text-dark"></i> Saved</Link></li>
                  <li className='dropdown-item'><Link to="" className=' text-dark'><i class="fa-solid fa-gear text-dark"></i> Settings</Link></li>
                  <li className="dropdown-item"><Link to="" className=' text-dark'><i class="fa-solid fa-repeat text-dark"></i> Switch Account</Link></li>
                   <li className='dropdown-item shadow'><Link to="" className=' text-dark'><i class="fa-solid fa-power-off text-dark"></i> Log Out</Link></li>
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