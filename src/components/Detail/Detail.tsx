import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailMoviesQuery } from '../../features/movies/movieApiSlice'
import Spinner from '../Spinner/Spinner'
import {AiFillHeart} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addLikeMovie, dislikeMovie, movieProps } from '../../features/movies/movieSlice';


const Detail = () => {
  const {id}=useParams()
  const{data,isLoading}=useGetDetailMoviesQuery({id})
  const {likeMovies} =useAppSelector(state=>state)
  const dispatch = useAppDispatch()
  const [like,setLike] =useState(false)
  // console.log()


  const checkLiked =()=>{
    const filter=likeMovies.movies.some((movie:movieProps)=> movie.id ===Number(id))
    return setLike(filter)
  }
  useEffect(() => {
    checkLiked()
  }, [like,dispatch,likeMovies])
  
  if(isLoading){
    return <Spinner/>
  }


  const changeHandler = () => {
    if(like ===true){
      console.log()
      dispatch(dislikeMovie(Number(id)))
    }else{
      dispatch(addLikeMovie(data))
    }
  }
  return (
  <div className='relative p-5 grid grid-cols-[20%,80%] bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '>
    <div className='absolute top-2 right-2 cursor-pointer' onClick={changeHandler} >
        <AiFillHeart size={30} className={`${like? 'text-red-800':'text-white'}`}/>
    </div>
   
    <div className='bg-red-300' >
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
        alt={data?.title}
        className="rounded-t-lg w-full  object-cover"
      />
    </div>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title ||data?.name}</h5>
        {data?.overview && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.overview}</p>
        )}
    </div>
  </div>
  )
}

export default Detail