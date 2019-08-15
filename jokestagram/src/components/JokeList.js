import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';

import JokeCard from './JokeCard'
import { getJokeData } from './../actions/'

const JokeList = props => {
  return (
    <>
      <button onClick={props.getJokeData}>
        {props.isLoading ? <Loader type="ThreeDots" color="orange" height={80} width={80} /> : 'Get Jokes!'}
      </button>
      {props.jokes && 
        props.jokes.map(joke => <JokeCard key={joke.id} joke={joke} />)}
    </>
  )
}

const mapStateToProps = state => {
  return {
  jokes: state.jokes,
  isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps, 
  {getJokeData}
)(JokeList)