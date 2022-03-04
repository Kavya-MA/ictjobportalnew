import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from "react";
import AppBar from "./components/navbar/AppBar";
import Home from "./components/home/Home.js"
import Login from "./components/login/Login.js"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobs from "./components/jobs/Jobs.js"
import Employer from "./components/signup/Employer.js";
import Faculty from "./components/signup/Faculty";
import Jobseeker from "./components/signup/Jobseeker";
import { useState,useEffect } from "react";
function App()
{
  

    const[posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/api/jobs").
      then(res=>setPosts(res.data)).catch(error=>console.log(error))
      
    }
    )
    return(
    <Router>
   <>
   <AppBar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/employer" element={<Employer/>}/>
     <Route path="/faculty" element={<Faculty/>}/>

     <Route path="/jobseeker" element={<Jobseeker/>}/>
     <Route path="/jobs" element={<Jobs posts={posts}/>}/>
</Routes>
   
   
   </>
    
    </Router>

  );
}



export default App;
