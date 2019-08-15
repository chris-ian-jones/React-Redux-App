import React from 'react'

const JokeCard = props => {
  return (
    <>
      {/* <p>{props.joke.id}</p>
      <p>{props.joke.type}</p> */}
      <p>{props.joke.setup}</p>
      <p>{props.joke.punchline}</p>
    </>
  )
}

export default JokeCard