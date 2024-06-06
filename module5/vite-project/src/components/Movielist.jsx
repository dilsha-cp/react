import React from 'react'
import Moviecard from './Moviecard'

function Movielist() {
  return (
    <div className='p-4'>
        <div className='text-2xl m-5 text-bold text-center'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around'>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          <Moviecard/>
          


        </div>
    </div>
  )
}

export default Movielist