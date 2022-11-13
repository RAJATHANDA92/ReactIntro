import React from 'react'
import "./About.css"
function About() {
  return (
    
    <section id="about">
    <div className="main">
   <div>
    <h2><b>Education</b></h2>
   <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Post Graduation Diploma in Advance Computing</h5>
        <p className="card-text">March 2022 To Sep 2022</p>
        <p className="card-text">Result Awaiting</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">B.Tech(Mechanical)</h5>
        <p className="card-text">July 2014 To Jun 2018</p>
        <p className="card-text">Completed With 65.8% Marks</p>
      </div>
    </div>
  </div>
</div>
</div>
<br/>
   <div>
   <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Intermediate</h5>
        <p className="card-text">July 2011 To Jun 2012</p>
        <p className="card-text">Completed With 55% Marks</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">High School</h5>
        <p className="card-text">July 2009 To Jun 2010</p>
        <p className="card-text">Completed With 58.3% Marks</p>
      </div>
    </div>
  </div>
</div> 
</div>
<br/>
  <div>
  <h2><b>Skills</b></h2>
  <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">FrontEnd Technologies</h5>
        <p className="card-text">React.Js, CSS, HTML</p>
        <p className="card-text">JavaScript, Bootstrap</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Backend Technologies</h5>
        <p className="card-text">Java, C++, C#, Spring Boot</p>
        <p className="card-text">JavaScript, NodeJs</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Database Technologies</h5>
        <p className="card-text">Oracle, SQL, MySQL</p>
        <p className="card-text">Pl SQL, MongoDb</p>
      </div>
    </div>
  </div>
</div> 
</div>
</div>
</section>
  );
}

export default About