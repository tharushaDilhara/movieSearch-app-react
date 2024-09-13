import React, { useState } from 'react'
import search from '../../src/assets/search.png'
import mist from '../../src/assets/mist.png'
import backIMG from '../../src/assets/backIMG.jpg'
import './MovieSearchApp.css'
const MovieSearchApp = () => {

    const[title,setTitle] = useState("Harry potter");
    const[newtitle,setnewTitle] = useState("")
    const[poster,setPoster] = useState("");
    const[year,setYear] = useState("");
    const[actors,setTActors] = useState("");
    const[plot,setPlot] = useState("");
    const[runtime,setTRuntime] = useState("");
    const[type,setType] = useState("");
    const[rating,setRating] = useState("")
    const[isVisibleImgBox,setisVisibleImgBox] = useState(false);
    const apiKey = "51261a89";

    const fetchMovies = async ()=>{
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
            const movieData = await response.json();

            //const{Poster,Title,Year,Released,Runtime} = movieData;
            console.log(movieData);
            setnewTitle(movieData.Title);
            setPoster(movieData.Poster);
            setYear(movieData.Year);
            setTActors(movieData.Actors);
            setPlot(movieData.Plot);
            setTRuntime(movieData.Runtime);
            setType(movieData.Type);
            setRating(movieData.imdbRating);
            setisVisibleImgBox(true);
        } catch (error) {
            alert("fill the field");
            return 0;
        }
    }
    
  return (
    <div className='app'>
        <div className="container">
            <div className="header">
                <h1>Search your movie here</h1>
            </div>
            <div className="input-box">
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
                <img src={search} onClick={fetchMovies} />
            </div>
            <div className="details">
                <div className="img-container" style={{display: `${fetchMovies ? "block" : "none"}`}}>
                    <img src={poster} alt="" style={{display: isVisibleImgBox? 'block':'none'}}/>
                </div>
                <div className="moreDe">
                    <p>Title : {newtitle}</p>
                    <p>Type : {type}</p>
                    <p>Run time : {runtime}</p>
                    <p>Year : {year}</p>
                    <p>Actors : {actors}</p>
                    <p id='plot'>Plot : {plot}</p>
                    <p>IMDB rating : {rating}/10</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieSearchApp
