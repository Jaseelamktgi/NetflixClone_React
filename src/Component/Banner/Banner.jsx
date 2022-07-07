import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../Constants/Constant'


function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])

  return (
    <div className='banner' style={{ backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})` }}>
      <div className="content">
        <h1 className="title">{Movie ? Movie.title : ""}</h1>
        <div className="banner_buttons">
          <buttton className="button">Play</buttton>
          <buttton className="button">My List</buttton>
        </div>
        <h1 className="description">{Movie ? Movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
