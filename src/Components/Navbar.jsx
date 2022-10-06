import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({searching,rating,handleRating,handleSearch}) => {
  return (
    <div className='navbar'>
       <Link className='home' to="/">Home</Link>
        <Search searching={searching} rating={rating} handleRating={handleRating} handleSearch={handleSearch} />
        
    </div>
  )
}

export default Navbar