import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import Axios from 'axios'
import axios from 'axios'
import Pagination from './Pagination'

function Movielist({handleWatchList,handleRemove,watchlist}) {
  const [movies,setMovies]=useState([])
  const [pageNo,setpageNo]=useState(1)
  const pagePrev=()=>{
    if(pageNo==1){
      setpageNo(pageNo)
    }
    else{
      setpageNo(pageNo-1)
    }
  }
  const pageNext=()=>{
    setpageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0ed043a0c308ced862820c9001bdaf95&language=en-US&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-4'>
        <div className='text-2xl m-5 text-bold text-center'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-8'>
          {movies.map((movieobj)=>{
            return <Moviecard key={movieobj.id} movieobj={movieobj} poster_path={movieobj.poster_path} name={movieobj.original_title} handleWatchList={handleWatchList} handleRemove={handleRemove} watchlist={watchlist}/>
          })}
        </div>
        <Pagination pageNo={pageNo} pagePrev={pagePrev}pageNext={pageNext}/>
    </div>
  )
}

export default Movielist
//https://api.themoviedb.org/3/movie/popular?api_key=0ed043a0c308ced862820c9001bdaf95&language=en-US&page=1