import React from "react";

function Watchlist() {
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[20rem] bg-gray-200 outline-none px-4"
        ></input>
      </div>
      <div className="overflow-hidden rounded-lg border borer-gray-400 m-8">
        <table className="w-full text-black-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className='h-[6rem] w-[10rem]' src={`https://rukminim2.flixcart.com/image/750/900/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false`}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
