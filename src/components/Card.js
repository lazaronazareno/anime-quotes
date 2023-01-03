import React, { useState, useEffect } from 'react'
import './Card.css'
import Quote from './Quote'

const Card = ({ data, getAnimeQuote }) => {
  const [anime, setAnime] = useState([])
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const addWords = (text) => text.split(' ').map((word, index) => (
      <span
        key={index}
        className='card-subtitle-word'
        style={{ transitionDelay: `${index * 40}ms` }}
      >
        {word}
      </span>
    ))
    setAnime(addWords(data.anime ? data.anime : ''))
    setCharacter(addWords(data.character ? data.character : ''))
  }, [data])

  return (
    <div
      onClick={() => getAnimeQuote()}
      className='card'
    >
      <div className='card-content'>
        <Quote data={data} />
        <h4 className='card-subtitle card-character'>{character}</h4>
        <h4 className='card-subtitle'>{anime}</h4>
      </div>
    </div>
  )
}

export default Card

/* import { useRef, useEffect, Fragment } from 'react';

const Subtitle = () => {
  const subtitleRef = useRef(null);

  const createWord = (text, index) => (
    <span
      key={index}
      className="card-subtitle-word"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {text}
    </span>
  );

  const addWords = (text) => text.split(' ').map(createWord);

  useEffect(() => {
    const words = addWords("But in a much more real sense, I have no idea what I'm doing.");
    words.forEach((word) => subtitleRef.current.appendChild(word));
  }, []);

  return (
    <Fragment>
      <h2 className="card-subtitle" ref={subtitleRef} />
    </Fragment>
  );
} */
