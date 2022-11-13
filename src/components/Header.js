import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='header'>
      <nav>
        <img src="https://i.postimg.cc/521fKgZ4/20221022-172336-0000-removebg-preview.png" className="logo" />
        <ul>
          <li><a href="#"><b>Home</b></a></li>
          <li><a href="#about"><b>About</b></a></li>
          <li><a href="#project"><b>Project</b></a></li>
          <li><a href="#contacts"><b>Contacts</b></a></li>
        </ul>
        <a href="https://drive.google.com/file/d/1bV2G9MIn1gRsDk_tUU6Yrr5sm7qVKy1D/view?usp=sharing" className="btn">Resume</a>
      </nav><br/>
      <div className="content">
      <span className="title"><b>Fullstack Web Developer</b></span><br/>
        <h1>Hello, I'm <span>RAJAT</span></h1><br/>
        <p>
          I recently completely post graduate diploma from CDAC. Now i'm looking <br/>
          for a role in Fullstack, frontEnd, BackEnd, M-E-R-N Stack Developer.
        </p>
      </div>
    </div>
  )
}

export default Header