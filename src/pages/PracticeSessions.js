import React from 'react'
import {MenuList} from '../Components/MenuList'
import MenuItem from '../Components/MenuItem'
import '../styles/PracticeSessions.css'

function PracticeSessions() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our sessions</h1>
        <div className='menuList'>
            {MenuList.map ((menuItem, index)=>
            {
                return <MenuItem key={index} name={menuItem.name} image={menuItem.image} duration={menuItem.duration} description={menuItem.description}/>
            }
            )}
        </div>
    </div>
  )
}

export default PracticeSessions