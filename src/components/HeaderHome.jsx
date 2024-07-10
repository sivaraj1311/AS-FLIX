import React from 'react'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
  
  return (
    <>
    <header className='headerhome'>
  <div className="headerhome1">
    <div>
      <h2 className="h3headinghome">AS Flix</h2>
    </div>
    <h4 className="home-texthome">Home</h4>
  </div>
  <div className="header2home">
    <button><Link to='/section2'>Bollywood Movies</Link></button>
    <button><Link to='/section1'>Hollywood Movies</Link></button>
    <button className='goback'><Link to ='/logout'>Go Back</Link></button>
  </div>
</header>

    </>
  )
}

export default HeaderHome