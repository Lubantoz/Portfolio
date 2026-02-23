import React from 'react'

export default function Nav({ route, setRoute }) {
  return (
    <header className="site-header">
      <div className="brand" onClick={() => setRoute('home')}>Your Name</div>
      <nav>
        <button className={route==='home'? 'active' : ''} onClick={()=>setRoute('home')}>Home</button>
        <button className={route==='about'? 'active' : ''} onClick={()=>setRoute('about')}>About</button>
        <button className={route==='projects'? 'active' : ''} onClick={()=>setRoute('projects')}>Projects</button>
        <button className={route==='contact'? 'active' : ''} onClick={()=>setRoute('contact')}>Contact</button>
      </nav>
    </header>
  )
}
