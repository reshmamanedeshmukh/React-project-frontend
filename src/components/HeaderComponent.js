import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
     <nav className="navbar navbar-expand-lg  navbar-light bg-info">
     
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
        <h6 className="navbar-brand">Employee Management System</h6>
      

<ul class="navbar-nav me-auto mb-2 mb-lg-0">

<li class="nav-item">

<Link to="/employees" class="nav-link active" aria-current="page" href="#">Home</Link>

</li>

  <li class="nav-item">

    <Link to="/add-employee" class="nav-link active" aria-current="page" href="#">Add</Link>

  </li>

  <li class="nav-item">

    <Link to="/contact-employees" class="nav-link active" aria-current="page" href="#">Contact Us</Link>

  </li>
 


</ul>
</div>
     
     </nav>
        </header>

    </div>
  )
}

export default HeaderComponent