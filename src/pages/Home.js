import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import hands from '../assets/hands.png'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${hands})` }}>
        <div className='headerContainer'>
            <h1>Practice with Me!</h1>
            <p>Online guided practice sessions for piano students</p>
            <Link to='/practice-sessions'>
                <button>Check offers</button>
            </Link>
        </div>
    </div>
  )
}

export default Home