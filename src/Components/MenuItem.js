import { duration } from '@mui/material'
import React from 'react'

function MenuItem({name, image, duration, description}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{duration} min</p>
        <p id='description'>{description}</p>
    </div>
  )
}

export default MenuItem