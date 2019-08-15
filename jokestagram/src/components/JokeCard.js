import React from 'react'

const JokeCard = props => {
  return (
    <>
      <p>{props.joke.setup}</p>
      <p>{props.joke.punchline}</p>
    </>
  )
}

export default JokeCard