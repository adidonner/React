import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function About() {

  return (
      <div>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/all-dogs">Action1</Link></li>
    <li><Link className="dropdown-item" to="/all-dogs">Action2</Link></li>
   <li><Link className="dropdown-item" to="/all-dogs">Action3</Link></li>

  </ul>
</div>
    </div>
  )
}

export default About