import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import MovieCard from '../MovieCard/MovieCard'

const LikesMovies = () => {
  const {likeMovies} =useAppSelector(state=>state)

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mt-10'>

            {
              likeMovies.movies.map(movie=>{
                const { id, title, overview, poster_path,name } = movie;
                return(
                  <MovieCard key={id} id={id} title={title} name={name} overview={overview} poster_path={poster_path} />
                )
              })
            }
              
     

      
    </div>
    </div>
  )
}

export default LikesMovies