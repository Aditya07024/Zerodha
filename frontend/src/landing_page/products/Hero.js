import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5 mb-5 pt-5 text-muted' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='row border-bottom' style={{ width: '90%',textAlign: 'center',display: 'flex', justifyContent: 'center' }}>
        <h2>Zerodha Products</h2>
        <p className='fs-3'>Sleek, modern, and intuitive trading platforms</p>
        <p className='pb-5'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
      </div>
    </div>
  )
}

export default Hero