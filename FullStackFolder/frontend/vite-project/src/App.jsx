import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [jokes , setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  })
  return (
    <div>
      <h1>Chai Or Code</h1>
      <p>JOKES : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  )
}

export default App
