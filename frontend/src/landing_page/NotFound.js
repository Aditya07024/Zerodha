import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div class="container p-5 my-5">
      <div class="row text-center">
      <h1>404 not found.</h1>
      <p>Sorry the page you are looking for doesn't exist.</p>
     
      <Link to="/home"><button className="p-2 btn btn-primary" style={{width:"20%",margin:"0 auto"}}>Go Home</button></Link>
      </div>
    </div>
  )
}

export default NotFound;