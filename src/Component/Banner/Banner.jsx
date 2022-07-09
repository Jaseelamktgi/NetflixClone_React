import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../Constants/Constant'

function Banner() {
  // Setting up useState
  const [Movie, setMovie] = useState([])

  useEffect(() => {
    function fetchData() {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log("Movies list....................", response.data.results[0])
        setMovie(
          response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
          ])
      })
    }
    fetchData();
    //console.log(Movie)
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  /* useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
       console.log(response.data.results[0])
       setMovie(response.data.results[0])
     })
   }, [])
   */

  return (
    <div className='banner' style={{ backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})` }}>
      <div className="content">
        <h1 className="title"> {Movie?.title || Movie?.name || Movie?.original_name}</h1>
        <div className="banner_buttons">
          <buttton className="button">Play</buttton>
          <buttton className="button">My List</buttton>
        </div>
        <h1 className="description">{truncate(Movie?.overview, 150)}</h1>


      </div>
      {/* Empty fade div with bottom fade effect   */}
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
