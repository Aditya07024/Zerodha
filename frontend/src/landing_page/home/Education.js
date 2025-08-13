import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className='row '>
        <div className='col-6'>
          <img src='media/images/education.svg' alt='education' className='img-fluid' />
        </div>
        <div className='col-6 mt-4'>
          <h1 className='fs-2 mb-3'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world<br></br>covering the everything from the basics to advanced trading.</p>
          <a href='' style={{textDecoration:'none'}}><b>Versity-&gt;</b></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' style={{textDecoration:'none'}}><b>TradingQ&A-&gt;</b></a>


        </div>
      </div>
    </div>
  )
}

export default Education