import React from 'react'
import { images } from '../data'
import MainIntroduction from './MainIntroduction'
import MainText from './MainText'

function MainSection() {
  return (
    <div className='landing-page-container'>
        <MainText />
        <img src={images.zakiImage} alt="profile" className='landing-page-image'/>
        <MainIntroduction />
    </div>
  )
}

export default MainSection