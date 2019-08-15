import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import JokeCard from './JokeCard'
import { getJokeData } from './../actions/'

const StyledJokeListContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledJokesContainer = styled.div`
  width: 100vw;
  max-width: 100%
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
`
const StyledErrorMessage = styled.p`
  color: red
`

const JokeList = props => {
  return (
    <StyledJokeListContainer>
      {props.isLoading ? (
        <Loader type="ThreeDots" color="orange" height={60} width={150}/> 
      ) : (
        <Button onClick={props.getJokeData} size='massive' color='orange'>
          Go
        </Button>
      )}
      <StyledErrorMessage>{props.error}</StyledErrorMessage>
      <StyledJokesContainer>
        {props.jokes && 
          props.jokes.map(joke => <JokeCard key={joke.id} joke={joke} />)}
      </StyledJokesContainer>
    </StyledJokeListContainer>
  )
}

const mapStateToProps = state => {
  return {
  jokes: state.jokes,
  isLoading: state.isLoading,
  error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {getJokeData}
)(JokeList)