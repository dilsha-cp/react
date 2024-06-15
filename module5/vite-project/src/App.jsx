import { useState } from "react";
import Banner from "./components/Banner";
import Movielist from "./components/Movielist";
import { Navbar } from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);
  let handleWatchList = (movieobj) => {
    let newWatchList = [...watchlist, movieobj];
    setWatchlist(newWatchList);
    console.log(newWatchList);
  };
  let handleRemove = (movieobj) => {
    let filterWatchList = watchlist.filter((movie) =>{
      return movie.id !== movieobj.id;
    })
    setWatchlist(filterWatchList);
    console.log(filterWatchList)
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movielist
                  watchlist={watchlist}
                  handleWatchList={handleWatchList}
                  handleRemove={handleRemove}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
