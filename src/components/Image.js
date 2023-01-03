import React from 'react'
import styled from '@emotion/styled'

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: black;
  padding: 0 2rem;
`

const Name = styled.span`
  color: white;
  background-color: black;
  font-size: 2rem;
  padding: 1rem;
`

const Img = styled.img`
  width: 30vw;
  height: 15vh;
  object-fit: contain;
`

const Image = ({ image, name }) => {
  return (
    <ImgContainer>
      {image.Image
        ? <Img
            src={`https://duckduckgo.com/${image.Image}`}
            alt={name}
          />
        : null}
      <Name>{name}</Name>
    </ImgContainer>
  )
}

export default Image
