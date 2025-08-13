import React from 'react'

const Hero = () => {
  return (
    <div class="container p-5">
      <div class="row text-center">
        <img src='media/images/homeHero.png' alt='heroImage' className='m-5'style={{width:"90%"}}/>
      
      <h1>Invest in everything</h1>
      <p>Online platform to invest in stocks, mutual funds, and more.</p>
      <button className="p-2 btn btn-primary" style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero