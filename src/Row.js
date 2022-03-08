import React, { useState, useEffect } from 'react'
import axios from './axios'

export default function Row({ title }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchURL)
      }
      fetchData();
    }, [movies])
    

  return (
    <div>
        {/* title */}
        <h2>{title}</h2>

        {/* container with posters*/}
    </div>
  )
}
