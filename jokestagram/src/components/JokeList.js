import React from 'react'
import { connect } from 'react-redux'

import JokeCard from './JokeCard'
import { getJokeData } from './../actions/'

const JokeList = props => {
  return (
    <>
      <button onClick={props.getJokeData}>Get Jokes!</button>
      {props.jokes && 
        props.jokes.map(joke => <JokeCard id={joke.id} joke={joke} />)}
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
  {getJokeData}
)(JokeList)