import React from 'react';
import "./Navbar.css"

import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
const AppBar=()=> {
    return (<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      < img src={require('../../images/logo.jpeg')} className="newlog"></img>
        <a className="navbar-brand" href="/home">ICTAK ALUMNI JOB PORTAL</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent" >
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item  ">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
           
          <NavDropdown.Item href="/JobSeeker">Job Seeker</NavDropdown.Item>
          <NavDropdown.Item href="/Faculty">Faculty</NavDropdown.Item>
          <NavDropdown.Item href="/Employer">Employer</NavDropdown.Item>
          
        </NavDropdown> 
            
            <li className="nav-item">
              <a className="nav-link" href="/jobs">Jobs</a>
      
            </li>
            
          </ul>
          
        </div>
      </nav>
      
      </div> );
}

export default AppBar;
//<div className="header">
               //<img src={require('../../images/logo.jpeg')} className="newlog"></img>
           // <h2 className="logo">ICTAK Alumini Job Portal</h2>
            //<nav className="navbar">
           // <Link to="/">Home</Link>
                    //<Link  to="/jobs">Jobs</Link>
                    //<Link  to="/login">Login</Link>
                  //  <Link  to="/signup">Signup</Link>  
                   // </nav>
        //</div>//
   