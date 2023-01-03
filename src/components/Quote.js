import React from 'react'
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: center;
  color: white;
  margin-bottom: auto;
`

const QuoteTitle = styled.h1`
  font-size: 5vmin;
`

const Quote = ({ data }) => {
  const { quote } = data
  return (
    <QuoteContainer>
      <QuoteTitle>{quote}</QuoteTitle>
    </QuoteContainer>
  )
}

export default Quote
