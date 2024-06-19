import React, {useState} from 'react';
import logo from '../assets/cropped-favicon-1.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks]=useState(false);
    const toggleNavbar = ()=> {
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks? "open": "close"}>
            <img src={logo} alt=''/>
            <div className='hiddenLinks'>
            <Link to='/' id='hiddenLink'>Home</Link>
            <Link to='/practice-sessions' id='hiddenLink'>Practice Sessions</Link>
            <Link to='/about' id='hiddenLink'>About</Link>
            <Link to='/contact' id='hiddenLink'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/practice-sessions'>Practice Sessions</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={toggleNavbar} id='navbarButton'>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar