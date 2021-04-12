import React from 'react'
import { Card } from 'react-bootstrap'

const MovieCard = (movie) => {
  console.log(movie)

  return (
    <Card className='text-center' style={{ width: '15rem', height: '20rem' }}>
      <Card.Img
        style={{ width: '15rem', height: '10rem' }}
        variant='top'
        src={`https://www.themoviedb.org/movie${movie.movie.poster_path}`}
      />
      <Card.Body class='d-flex flex-column'>
        <Card.Title style={{ height: '2rem' }}>
          <Card.Text>{movie.movie.original_title}</Card.Text>
        </Card.Title>
        <Card.Text>Year of Release: {movie.movie.release_date}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
