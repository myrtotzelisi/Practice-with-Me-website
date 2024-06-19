import React from 'react'
import AboutPhoto from '../assets/AboutPhoto.png';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div
        className='aboutTop'
        style={{backgroundImage: `url(${AboutPhoto})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About 'Practice with me!'</h1>
            <p>Do you already take piano lessons but you struggle with your practice? Or you are not sure how to practice? Do you get lost in your homework and end up giving up after 10 minutes? 
            </p>
            <p>Come practice with me! In our practice sessions I will guide you through the whole process of practicing and make sure that every minute counts.
                We will warm up, work on loosening the fingers, study the parts of the pieces that don’t work, memorize the music and take breaks when needed. Oh, and do all the boring but necessary repetitions together until it works!
                Last but not least, I will teach you HOW to practice. So that you can independently practice EFFECTIVELY.
            </p>
            <p><u>Our sessions take place online via ZOOM. A link will be sent to you after your booking with all the necessary information.</u>
            </p>

        </div>
    </div>
  )
}

export default About