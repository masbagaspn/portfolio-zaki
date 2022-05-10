import React from 'react'
import { images } from '../data'

function Project({projectData: {id, title, desc, techs, github, vercel}}) {
  return (
    <div className={`project-container ${id}`}>
      <a href={vercel} className='project-content' target='_blank' rel='noreferrer'>
        <div className='project-first-col'>
            <div className='project-text'>
              <h1 className='project-title'>{title}</h1>
              <p className='project-desc'>{desc}</p>
            </div>
          </div>
          <div className='project-second-col'>
            <div className='project-techs'>
                {techs.map((tech, index) => <span key={index} className={`project-tech project-${tech.toLowerCase()}`}>{tech}</span>)}
            </div>
            <div className='project-links'>
              <a href={github} className="project-github" target='_blank' rel='noreferrer'> 
                <img className='github-logo' src={images.githubIcon} alt="github-logo"/>
              </a>
              <a href={vercel} className="project-vercel" target='_blank' rel='noreferrer'>
                <img src={images.vercelIcon} alt="vercel-logo" />
              </a>
            </div>
          </div>
      </a>
    </div>
  )
}

export default Project