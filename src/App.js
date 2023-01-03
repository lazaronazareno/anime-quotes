import './App.css'
import styled from '@emotion/styled'
import { useState } from 'react'
import Quote from './components/Quote'
import Images from './components/Images'

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: black;
  color: white;
  padding: 0 1rem;
  box-sizing: border-box;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  background-color: orange;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-family: 'Dekko', cursive;
  cursor: pointer;
`

function App () {
  const [data, setData] = useState({})

  const getAnimeQuote = async () => {
    const api = await fetch('https://animechan.vercel.app/api/random')
    const quote = await api.json()
    setData(quote)
  }

  return (
    <Container className='App'>
      <Header>
        <h1>Anime Quotes</h1>
        <Button onClick={getAnimeQuote}>Get New Quote</Button>
      </Header>
      <Quote data={data} />
      {data.quote && <Images data={data} />}
    </Container>
  )
}

export default App
