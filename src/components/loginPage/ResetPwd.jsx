import React from 'react'
import { Link } from 'react-router-dom'

const ResetPwd = () => {
  return (
    
    <>
  <header>
    <div className="header">
      <div>
        <h1 className="asflix">AS Flix</h1>
      </div>
    </div>
  </header>
  <main>
    <div className="outer-container">
    
      <div className="inner-container">
      <h2>Change Password</h2>
        <h2 className='label'>Mail-ID</h2>
        <input type="email" required placeholder='Enter Your MailID' ></input>
       
        <h3>
          <strong  className='label'>New Password</strong>
        </h3>
        <input type="password" required placeholder="New password" />
        <h3>
          <strong  className='label'>Re-enter password</strong>
        </h3>
        <input type="password" required placeholder="Re-enter new password" />
        <br />
        <button className="btn-2">Password reset</button>
        <h6>Don't Have An Account?</h6>
        <button><Link to='/signup'>Sign up</Link></button>
        <button className="btn-2"><Link to='/'>Go Back</Link></button>
      </div>
    </div>
  </main>
</>

  )
}

export default ResetPwd