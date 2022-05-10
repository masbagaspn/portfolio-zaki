import React from 'react'
import { images, menus } from '../data'

function NavBar() {
  return (
    <nav className='nav-container'>
        <img src={images.zakiIcon} alt="" className='nav-logo'/>
        <ul className='nav-menus'>
            {menus.map((menu,index) => {
              return (
              <li key={index} >
                <a href={`#${menu.toLowerCase()}`} className='nav-menu'>{menu}</a>
              </li>)
            })}
        </ul>
    </nav>
  )
}

export default NavBar