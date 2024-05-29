import React from 'react'
import { navbarLogo } from '../../assets'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'> 
       <div className="container">
        <a href="" className="navbar-logos">
        <img src={navbarLogo} alt="navbar-logo" className="navbar-img" />
        <div className="navbar-title">
            Discover <br />
            invest
        </div>
        </a>
        <ul className="navbar-lists">
            <li className="navbar-list">
                <a href="" className="navbar-link">Kompaniya haqida</a>
            </li>
            <li className="navbar-list">
                <a href="" className="navbar-link">Loyihalar</a>
            </li>
            <li className="navbar-list">
                <a href="" className="navbar-link">Kariyera </a>
            </li>
            <li className="navbar-list">
                <a href="" className="navbar-link">Yangiliklar</a>
            </li>
            <li className="navbar-list">
                <a href="" className="navbar-link">Aloqa</a>
            </li>
        </ul>
        <div className="navbar-right">
        <ul className="navbar-items">
            <li className="navbar-item">
                <a href="" className="navbar-sublink"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li className="navbar-item">
                <a href="" className="navbar-sublink"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li className="navbar-item">
                <a href="" className="navbar-sublink"><i class="fa-brands fa-telegram"></i></a>
            </li>
        </ul>
        <select name="" id="">
            <option value="">uz</option>
            <option value="">en</option>
            <option value="">ru</option>
        </select>
        <a href="" className="navbar-connect"> +998 90 124 94 84 <i class="fa-solid fa-phone"></i></a>
        </div>
       </div>
    </div>
  )
}

export default Navbar