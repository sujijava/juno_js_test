import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, CardGroup, Alert } from 'react-bootstrap'
import MovieCard from './MovieCard'

const API_KEY = '7a8af86c5fce9a5b88d297b86bd7b073'

const Search = () => {
  const [year, setYear] = useState('initial')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    performSearch()
    console.log(searchResults)
  }, [year])

  const performSearch = async () => {
    console.log(year)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&year=${year}`
    )
    console.log(data.results.length)
    if (data.results.length === 20) {
      setSearchResults(data.results.slice(0, 10))
      console.log(searchResults)
    }
  }
  const renderedResults = searchResults.map((movie, index) => {
    return (
      <div key={index}>
        <MovieCard movie={movie}></MovieCard>
      </div>
    )
  })

  const noResults = (
    <Alert className='w-100' variant='success'>
      <p>Please start search</p>
    </Alert>
  )
  return (
    <div>
      <div>
        <Form>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter a movie title'
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <CardGroup>
        {searchResults.length === 0 ? noResults : renderedResults}
      </CardGroup>
    </div>
  )
}

export default Search
