import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <Link to='/'> <a class="navbar-brand" href="#">Jupiter</a></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
           <Link to='/'><a class="nav-link active" aria-current="page">Home</a></Link>
          </li>
          <li class="nav-item">
          <Link to='./about'><a class="nav-link">About</a></Link>
          </li>
          <li class="nav-item">
          <Link to='services'><a class="nav-link">Services</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar