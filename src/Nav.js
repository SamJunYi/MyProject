import logo from './Logo.svg';
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router'
import Booking from './Booking'

function Nav(){
    return(
        <>
        <div>
        <nav className='Navbar'>
        <img src={logo} className='Navbar_img'></img>
            <ul className='Navbar_header'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><NavLink to="/booking">Order Online</NavLink></li>
                <li><a href="#" className='Navbar_login'>Login</a></li>

            </ul>

            <ul className='Menubar'>
                <li><a href="#"><IoMenu /></a></li>
            </ul>
        </nav>

        </div>
        </>
    )
}

export default Nav;