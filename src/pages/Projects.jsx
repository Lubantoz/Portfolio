import React from 'react'
import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  { title: 'Project One', desc: 'Short description of project one.', link: '#' },
  { title: 'Project Two', desc: 'Short description of project two.', link: '#' },
]

export default function Projects(){
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {sampleProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  )
}
