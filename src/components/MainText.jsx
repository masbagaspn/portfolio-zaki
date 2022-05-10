import React from 'react'
import { mainSection } from '../data'

function MainText() {
  return (
    <div className='landing-page-text'>
        <h1 className='text-title'>{mainSection.title}</h1>
        <p className='text-desc'>{mainSection.desc}</p>
        <div className='text-button-container'>
          <button className='button text-button-contact'>{mainSection.button1}</button>
          <button className='button text-button-download'>{mainSection.button2}</button>
        </div>
    </div>
  )
}

export default MainText