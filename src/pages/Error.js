import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! It's a dead end</h1>
      </div>
    </section>
    <div className='error-page section'>
    <Link to='/' className='btn btn-primary'>
          Back To Home
    </Link>
    </div>
    </>
  )
}

export default Error
