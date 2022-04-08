import React from 'react'
import "./CharacterList.css"
import { useCharacters } from '../hooks/useCharacters'
import { Link } from 'react-router-dom'
import loader from '../images/1493.gif'

function CharactersList() {
  const { error, loading, data } = useCharacters()

  if (loading) return <div  
  style={{height: '80vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div>
        <h1>Loading...</h1>
        <img src={loader} alt = ''/>
      </div>
  </div>

  if (error) return <h1>Something went wrong!</h1>

  return (
    <div className='characterList'>
      {data.characters.results.map(character => {
        return <Link 
        style={{textDecoration: 'none', color: '#272827', border: '1px solid black', margin: '10px', padding: '10px'}} 
        // use character.id as endpoint to later use that useparams as prop to query
        to={`/${character.id}`}>
            <h2>{character.name}</h2>
            <img src={character.image} alt = ''/>
        </Link>
      })}
    </div>
  )
}

export default CharactersList