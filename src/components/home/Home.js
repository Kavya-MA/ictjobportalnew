import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

const Home=()=> {
    return (
        
        <div className='home'style={{ 
            backgroundImage: `url("../../images/background.jpeg")` 
          }}>
            
          <marquee className="move">Are you looking for a job after course completion??Come on Register with us and attain your dream job........</marquee>
         <Link  to="/Jobseeker" className="register">Register with us</Link>
        </div>
    );
}

export default Home;