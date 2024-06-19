import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.facebook.com/myrto.tzelisi/'  target='_blank' rel="noreferrer">
             <FacebookIcon/></a>
             <a href='https://www.instagram.com/namasduopiano/'  target='_blank' rel="noreferrer">
             <InstagramIcon/></a>
             <a href='www.linkedin.com/in/myrto-tzelisi'  target='_blank' rel="noreferrer">
             <LinkedInIcon/></a>
             <a href='https://www.youtube.com/channel/UCLeA0QVS1Js89PF43XsYcKw'  target='_blank' rel="noreferrer">
             <YouTubeIcon/></a>
            
        </div>
        <p>&copy; 2024 myrtotzelisi.com</p>
    </div>
  )
}

export default Footer