import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <h1>This page is not available</h1>
    <br />
    <button><Link to='/'>GoBack</Link></button>
  </>
  )
}

export default ErrorPage