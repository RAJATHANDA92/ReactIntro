import React from 'react'
import "./Project.css"
function Project() {
  return (
    <section id="project">
   <div>
   <h2><b>Projects</b></h2>
   <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">BE-FIT</h5>
        <p className="card-text">Fitness Website</p>
        <p className="card-text">HTML, CSS, NodeJs</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">QuickMart</h5>
        <p className="card-text">E-Commerce Website</p>
        <p className="card-text">Thymleaf, Spring Boot, MySQL</p>
      </div>
    </div>
  </div>
</div>
</div>
 </section>
  );
}

export default Project