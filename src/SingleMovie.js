import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setMovie(data)
  }
  console.log(movie)


  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  const { Poster: poster, Title: title, Plot: plot, Year: year, imdbRating: rate } = movie

  return <section className='single-movie'>

    <img src={poster} alt={title} />
    <div className="single-movie-info">
      <h2>{title}</h2>
      <p>{plot}</p>
      <h4>{year}</h4>
      <p>IMDB Rate:{rate}</p>

      <Link className='btn' to="/"> back to movies</Link>
    </div>
  </section >
}

export default SingleMovie
