import React, { useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'

const StyledText = styled.p`
  font-size: 1.5rem;
`

const StyledCensor = styled.div`
  :hover {
    cursor: pointer;
  }
`

const JokeCard = props => {
  const [display, setDisplay] = useState('#545452')

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <StyledText>{props.joke.setup}</StyledText>
        </Card.Header>
        <Card.Description>
          <StyledCensor 
            style={{backgroundColor: `${display}`, color: '#545452'}} 
            onClick={() => setDisplay('transparent')}
          >
            <StyledText>{props.joke.punchline}</StyledText>
          </StyledCensor>
        </Card.Description>
      </Card.Content>
   </Card>
  )
}

export default JokeCard