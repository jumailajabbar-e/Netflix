import React,{ useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../../axios'
import { imageUrl,API_KEY } from '../Ult/constants';
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movie,setMovie]=useState([])
  const [urlid,setUrlid]=useState('')
  useEffect(() => {
      axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
 }).catch(err=>{
  alert('error')
 })
 },)
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
     //https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handleMovie = (id)=>{
  console.log(id)
  axios.get(`/movie/460465/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!==0){
      setUrlid(response.data.results[0])
    }else{
      console.log('Array empty')
    }
  })
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
          <div className='posters'>
          {movie.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPosters' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
          </div>
        {urlid &&  <Youtube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost