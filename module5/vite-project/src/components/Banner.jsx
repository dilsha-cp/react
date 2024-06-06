import React from 'react'

function Banner() {
  return (
    <div className='h-[60vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/07/saw-x.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Saw X</div>
    </div>
  )
}

export default Banner