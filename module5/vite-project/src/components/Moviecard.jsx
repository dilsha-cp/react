import React from 'react'

function Moviecard({poster_path,name}) {
  return (
    <div className='h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='text-white w-full  p-2 text-centre bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default Moviecard