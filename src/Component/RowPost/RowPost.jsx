import './RowPost.css'
import axios from '../../Axios'
import React, { useState, useEffect } from 'react'
import {imageUrl,API_KEY} from '../Constants/Constant'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err => {
            //alert("Network Error")
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const [urlId, seturlId] = useState('')
    const handleMovieTrailer=(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }
            else{
                console.log("Trailer not available")
            }
        })
    }

    return (
        <div className='row'>
            <h2 className={props.isSmall ? 'smallTitle':'title'}>{props.title}</h2>
            <div className="posters">
                { 
                Movies.map((movies, index) =>
                    <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+movies.backdrop_path}`} 
                    onClick={()=>handleMovieTrailer(movies.id)} alt="Posters" />
                )}
            </div>
            {urlId && <Youtube videoId={urlId.key}  opts={opts}/>}
        </div>
    )
}

export default RowPost
