import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5 pt-5 py-5' >
      <div className='row'>
        <div className='col'>
          <h3>Support Portal</h3>
        </div>
        <div className='col pe-5'>
          <p style={{textAlign:"right"}}>Track Tickets</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row' style={{width: '80%'}}>
            <h2>Search for an answer or browse help topics to create a ticket</h2>
            <form class="d-flex my-4" role="search">
        <input class="form-control py-3" type="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." aria-label="Search"/>
      </form>
          </div>
          <div className='row'>
            <a href="" style={{color:"white"}}>Track account opening Track segment activation Intraday<br></br> margins Kite user manual</a>
          </div>
        </div>
        <div className='col ps-5'>
          <h1>Featured</h1>
          <a href='' style={{color:"white"}}>1. Current Takeovers and Delisting = January 2024</a><br></br>
          <a href='' style={{color:"white"}}>2. Latest Intraday leverages - MIS & CO</a>
        </div>
      </div>
    </div>
  )
}

export default Hero