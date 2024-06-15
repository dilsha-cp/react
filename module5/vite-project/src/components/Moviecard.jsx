import React from "react";

function Moviecard({
  movieobj,
  poster_path,
  name,
  handleWatchList,
  handleRemove,
  watchlist,
}) {
  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => handleRemove(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-centrer rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleWatchList(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-centrer rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full  p-2 text-centre bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
