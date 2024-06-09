import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import Axios from 'axios'
import axios from 'axios'
import Pagination from './Pagination'

function Movielist() {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0ed043a0c308ced862820c9001bdaf95&language=en-US&page=2`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[])
  return (
    <div className='p-4'>
        <div className='text-2xl m-5 text-bold text-center'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-8'>
          {movies.map((movieobj)=>{
            return <Moviecard poster_path={movieobj.poster_path} name={movieobj.original_title}/>
          })}
        </div>
        <Pagination/>
    </div>
  )
}

export default Movielist
//https://api.themoviedb.org/3/movie/popular?api_key=0ed043a0c308ced862820c9001bdaf95&language=en-US&page=1