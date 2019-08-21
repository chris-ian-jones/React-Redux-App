import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
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

const JokeCard = ({ joke }) => {
  const [censorColor, setCensorColor] = useState('#545452')

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <StyledText>{joke.setup}</StyledText>
        </Card.Header>
        <Card.Description>
          <StyledCensor 
            style={{backgroundColor: `${censorColor}`, color: '#545452'}} 
            onClick={() => setCensorColor('transparent')}
          >
            <StyledText>{joke.punchline}</StyledText>
          </StyledCensor>
        </Card.Description>
      </Card.Content>
   </Card>
  )
}

export default JokeCard