import React from 'react'
import { selfIntroduction } from '../data'

function MainIntroduction() {
  return (
    <div className='landing-page-introduction'>
        <span className='introduction-section'>introduction</span>
        <h1 className='introduction-title'>{selfIntroduction.title}</h1>
        <p className='introduction-desc'>{selfIntroduction.desc}</p>
    </div>
  )
}

export default MainIntroduction