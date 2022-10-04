import React from 'react'
import MoviesCard from './MoviesCard'

function MoviesList({list,deleteMovie,handleEdit}) {
  return (
    <div className='movielist'>
        {React.Children.toArray(list.map(movie=><MoviesCard film={movie} deleteMovie={deleteMovie} handleEdit={handleEdit}/>))
        }
    </div>
  )
}

export default MoviesList