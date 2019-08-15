import axios from 'axios'

export const FETCH_JOKE_DATA_START = 'FETCH_JOKE_DATA_START'
export const FETCH_JOKE_DATA_SUCCESS = 'FETCH_JOKE_DATA_SUCCESS'
export const FETCH_JOKE_DATA_FAILURE = 'FETCH_JOKE_DATA_FAILURE'

export const getJokeData = () => {
  return dispatch => {
    dispatch({ type: FETCH_JOKE_DATA_START })
    axios
      .get('https://official-joke-api.appspot.com/random_ten')
      .then(result => {
        console.log(result)
      })
  }
}