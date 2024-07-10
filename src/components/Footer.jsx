import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    
  <section className="section3">
    <div>
      <h1>bottom</h1>
    </div>
  </section>
  <footer>
    <div className="footer-main">
      <div className="footer"><Link to='/search'>
        <a href=""><img src="images/home.svg" alt="" />
          
        </a></Link>
      </div>
      <div className="footer">
      <Link to='/search'>
      <a href="">
          <img src="images/search.svg" alt="" />
        </a>
      </Link>
       
      </div>
      <div className="footer">
      <Link to='/about'>
      <a href="">
          <img src="images/about.svg" alt="" />
        </a>
      
      </Link>
       
      </div>
      <div className="footer">
      <Link to='/library'>
      <a href="">
          <img src="images/library.svg" alt="" />
        </a>
      
      </Link>
        
      </div>
    </div>
  </footer>
</>
  )
}

export default Footer