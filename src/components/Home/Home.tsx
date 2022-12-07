import React,{useState} from 'react'
import { useGetMoviesQuery } from '../../features/movies/movieApiSlice'
import MovieCard from '../MovieCard/MovieCard'
import NewPagination from '../Pagination/newPagination'
import Pagination from '../Pagination/Pagination'
import SearchBox from '../SearchBox/SearchBox'
import Spinner from '../Spinner/Spinner'

const Home = () => {
  const [searchTerm,setSearchTerm] =useState("")
  const [page , setPage] =useState(1)
  const {data,isSuccess,isLoading}=useGetMoviesQuery({page},{
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  // const [movies ,setMovies] =useState(data)

  console.log(data)

  const searchMovies = data?.results?.filter((movie:any) => {
    if(!searchTerm.length) return movie
    if(!movie.title) return ;
    return movie?.title.toLowerCase().includes(searchTerm);
  });

  if(isLoading) return <Spinner/>
  
  return (
  <div className='w-full flex flex-col '>
    <div className=" w-full mb-12 flex items-center justify-center mt-4">
      <SearchBox setSearchTerm={setSearchTerm} />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mt-10'>
        {searchMovies && searchMovies.length ? (
            searchMovies.map((movie:any) => {
              const { id, title, overview, poster_path,name } = movie;
              return <MovieCard key={id} id={id} title={title} name={name} overview={overview} poster_path={poster_path} />;
            })
          ) : (
            <h4>No Movie Found</h4>
      )}
    </div>
    <Pagination currentPage={setPage} page={page} pages={data?.total_pages}/>
    {/* <NewPagination currentPage={setPage} page={page} pages={data?.total_pages}/> */}
  </div>
  )
}

export default Home