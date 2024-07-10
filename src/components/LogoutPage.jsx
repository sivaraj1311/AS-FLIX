import React from 'react'
import { Link } from 'react-router-dom'

const LogoutPage = () => {
  return (
    <><h1>Thanks for using our Application</h1>
  <br />
  <h2>Please come again</h2><button><Link to='/'>Back to the LoginPage</Link></button>
  </>
  )
}

export default LogoutPage