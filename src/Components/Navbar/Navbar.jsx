import React, { useEffect, useState } from 'react'
import { navbarLogo } from '../../assets'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng') || 'uz';

    const handleChange = (e) => {
      const selectedLanguage = e.target.value;
      i18n.changeLanguage(selectedLanguage);
    };
    const [color, setColor] = useState(false);
    const changeColor = () => {
        setColor(window.scrollY >= 50);
      };
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
          window.removeEventListener('scroll', changeColor);
        };
      }, []);
  return (
    <div className={`navbar ${color ? 'navbar-active' : ''}`}> 
       <div className="container">
        <Link to="/" className="navbar-logos">
        <img src={navbarLogo} alt="navbar-logo" className="navbar-img" />
        <div className="navbar-title">
            Discover <br />
            invest
        </div>
        </Link>
        <ul className="navbar-lists">
            <li className="navbar-list">
                <NavLink to="/about" className="navbar-link"  activeClassName="active"> <i class="fa-solid fa-star star-icon"></i>{t("about")}</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/projects" className="navbar-link"  activeClassName="active"> <i class="fa-solid fa-star star-icon"></i>Loyihalar</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="https://hr.di.uz/" className="navbar-link"> <i class="fa-solid fa-star star-icon"></i>Kariyera </NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/news" className="navbar-link"> <i class="fa-solid fa-star star-icon"></i>Yangiliklar</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/connect" className="navbar-link"> <i class="fa-solid fa-star star-icon"></i>Aloqa</NavLink>
            </li>
        </ul>
        <div className="navbar-right">
        <ul className="navbar-items">
            <li className="navbar-item">
                <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" className="navbar-sublink"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li className="navbar-item">
                <a href="https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM=" className="navbar-sublink"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li className="navbar-item">
                <a href="https://t.me/discovery_invest" class="messengers__link" className="navbar-sublink"><i class="fa-brands fa-telegram"></i></a>
            </li>
        </ul>
        <select name="" id="" className='navbar-select' onChange={handleChange} value={languages}>
            <option value="">uz</option>
            <option value="">en</option>
            <option value="">ru</option>
        </select>
        <a href="tel:+ 998 (71) 288 88 88" className="navbar-connect"> +998 90 124 94 84 <i className="fa-solid fa-phone phone-icon"></i></a>
        </div>
        <div className='navbar-hamburger'>ham</div>
       </div>
    </div>
  )
}

export default Navbar