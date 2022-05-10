import React from 'react'
import { projects } from '../data'
import Project from './Project'

function Projects() {
  return (
    <div className='projects-container' id='works'>
      <div className='projects-content'>
        <h1 className='projects-title'>Projects</h1>
        {projects.map((data,index) => <Project key={index} projectData={data}/>)}
      </div>
    </div>
  )
}

export default Projects