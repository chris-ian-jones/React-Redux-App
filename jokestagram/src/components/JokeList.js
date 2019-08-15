import React from 'react'
import { connect } from 'react-redux'

import JokeCard from './JokeCard'

const JokeList = props => {
  return (
    <>
      <button>Get Jokes!</button>
      {props.jokes.map(joke => <JokeCard id={joke.id} joke={joke} />)}
    </>
  )
}

const mapStateToProps = state => {
  return {
  jokes: state.jokes
  }
}

export default connect(
  mapStateToProps, 
  {}
)(JokeList)