import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const JokeCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.joke.setup}</Card.Header>
        <Card.Description>{props.joke.punchline}</Card.Description>
      </Card.Content>
   </Card>
  )
}

export default JokeCard