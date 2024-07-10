import React from 'react'
import { useParams } from 'react-router-dom'



const Movie3 = () => {
    const {id}=useParams()
  return (<>
    <div>Movie1{id}</div>
    <a href="https://www.youtube.com/watch?v=VyHV0BRtdxo"><button>click here</button></a>

   
    </>
  )
}
export default Movie3