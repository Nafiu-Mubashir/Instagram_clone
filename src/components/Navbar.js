import React from 'react'
import { Link } from 'react-router-dom'
import user from "../assests/user-removebg-preview.png"
import iglogo from "../assests/iglogo.png"
function Navbar() {
  
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white navbar-dark py-3 sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand text-danger"><img src={iglogo} alt="" id='ig'/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
            className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navmenu">
          <div class="input-group ms-auto"  id='navInp'>
             <span class="input-group-text bg-light" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
            {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" /> */}
              <input type="text" className='form-control bg-light' placeholder='Search'/>
          </div>
            {/* <div className='navbar-nav m-auto'>
            </div> */}
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to="/" className='nav-link text-white'><i class="fa-solid fa-house text-dark"></i></Link></li>
              <li className='nav-item'><Link to="/signup" className='nav-link text-white'><i class="fa-brands fa-facebook-messenger text-dark"></i></Link></li>
              <li className='nav-item'><Link to="/products" className='nav-link text-white'><i class="fa-solid fa-square-plus text-dark"></i></Link></li>
              <li className='nav-item'><Link to="/products" className='nav-link text-white'><i class="fa-solid fa-compass text-dark"></i></Link></li>
              <li className='nav-item'><Link to="/products" className='nav-link text-white'><i class="fa-brands fa-gratipay text-dark"></i></Link></li>
              <img src={user} alt="" id='user' />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar