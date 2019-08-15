import React from 'react';
import styled from 'styled-components'

import JokeList from './components/JokeList'

const StyledAppContainer = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledTitle = styled.h1`
  font-size: 4rem;
  color: navy;
  padding-top: 50px;
`

function App() {
  return (
    <StyledAppContainer>
      <StyledTitle>Dad Jokes</StyledTitle>
      <JokeList />
    </StyledAppContainer>
  );
}

export default App;
