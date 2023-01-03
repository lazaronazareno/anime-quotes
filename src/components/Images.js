import React, { useEffect, useState } from 'react'
import Image from './Image'

const Images = ({ data }) => {
  const [image, setImage] = useState('')
  console.log(data.anime)

  const getAnimeImage = async (searchTerm) => {
    const api = await fetch(`https://api.duckduckgo.com/?q=${searchTerm}&format=json&pretty=1&no_html=1&skip_disambig=1&t=myapp`)
    const image = await api.json()
    setImage(image)
  }

  useEffect(() => {
    const searchTerm = data.anime
    if (searchTerm) {
      getAnimeImage(searchTerm)
    }
    console.log(image)
  }, [data])

  return (
    <Image image={image} name={data.anime} />
  )
}

export default Images
