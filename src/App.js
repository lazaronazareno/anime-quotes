import './App.css'
import styled from '@emotion/styled'
import { useState } from 'react'
import Card from './components/Card'
import { BsInfoCircleFill } from 'react-icons/bs'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

const Title = styled.div`
  color: white;
  rotate: 270deg;
  position: absolute;
  left: calc(-17% - 5vw);
  bottom: 40vh;
  margin: 0;
  font-size: 3vmin;
  height: 0vw;
  width: 45vw;

  & h1 {
    margin: 0;
  }

  @media (max-width : 850px) {
    top: 1vh;
    rotate: 0deg;
    width: 45vw;
    right: 0vw;
    left: auto;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.7s;
  background-size: 270% auto;
  font-size: 19px;
  color: black;
  margin: 1rem 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  background-image: 
  linear-gradient(90deg, #fb8500 14%, #fb8510 31%, #219ebc 43%,  #023047 100%);

  &:hover {
    color: white;
    background-position: right center;
    box-shadow: 0 6px 9px rgba(0, 0, 0, .2);
    transform: scale(1.01)
  }
`

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  color: white;
  position: absolute;
  left: 1vw;
  top: 1vw;

  & span {
    visibility: hidden;
  width: 120px;
  background-color: #fb8500;
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  }

  &:hover span {
    visibility: visible;
  }
`

function App () {
  const [data, setData] = useState({})

  const getAnimeQuote = async () => {
    const api = await fetch('https://animechan.vercel.app/api/random')
    const quote = await api.json()
    setData(quote)
  }

  return (
    <>
      {data.anime
        ? <>
          <Card data={data} getAnimeQuote={getAnimeQuote} />
          <Title>
            <h1>Anime Quotes</h1>
          </Title>
          <Tooltip><BsInfoCircleFill size={32} color='#fb8500' />
            <span>Click the card for new quotes</span>
          </Tooltip>
          {// eslint-disable-next-line react/jsx-closing-tag-location
}         </>
        : <Container>
          <h1>Anime Quotes</h1>
          <Button onClick={getAnimeQuote}>Generate new</Button>
          {// eslint-disable-next-line react/jsx-closing-tag-location
}        </Container>}
    </>
  )
}

export default App
