import React from 'react'
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
  padding: 3rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  text-align: end;
  min-height: 80vh;
  justify-content: center;
`

const QuoteTitle = styled.h1`
  font-size: 3rem;
`
const QuoteText = styled.span`
  font-size: 3rem;
  color: darkslategray;
`

const Quote = ({ data }) => {
  const { character, quote } = data
  return (
    <QuoteContainer>
      <QuoteTitle>{quote}</QuoteTitle>
      <QuoteText>{character}</QuoteText>
    </QuoteContainer>
  )
}

export default Quote
