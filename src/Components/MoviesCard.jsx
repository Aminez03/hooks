import React from 'react'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

function MoviesCard({film,deleteMovie,handleEdit}) {
  return (
    <div className='movieCard'>
        <h1> {film.name}</h1>
        <img src={film.image} alt={film.image} />
        <div className='blaka'>
        <div className='etoile'><StarRating rating={film.rating}/></div>
        <p>{film.date}</p>
        <button id='btn' onClick={()=>{deleteMovie(film.id)}}>Delete</button>
        <EditMovie handleEdit={handleEdit} movie={film}/>
        </div>
        
    </div>
  )
}

export default MoviesCard