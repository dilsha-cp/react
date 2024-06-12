import React from "react";

function Watchlist() {
  return (
    <>
    <div className="flex justify-center flex-wrap m-4 gap-4">
      <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white text-bold">Action</div>
      <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white text-bold">Action</div>
      <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white text-bold">Action</div>
    </div>
  
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
            <tr className="border-b-2">
              <td className="flex item-centre px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://rukminim2.flixcart.com/image/750/900/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false`}
                />
                <div className="mx-10">The matrix </div>
              </td>
              <td>8</td>
              <td>8.5</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
