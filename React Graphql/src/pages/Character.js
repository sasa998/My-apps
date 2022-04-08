import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import "./Character.css"
import loader from '../images/1493.gif'


const Character = () => {
  const { id } = useParams()

  // query a single character who has same id as useParams id
  const {data, loading, error} = useCharacter(id)

  console.log(error, loading, data)

  if (error) return <h2>Something went wrong!</h2>

  if (loading) return <div  
  style={{height: '70vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div>
        <h1>Loading...</h1>
        <img src={loader} alt = ''/>
      </div>
  </div>

  return (
    <div className='character' style={{width: '60%', margin: '0 auto'}}>
      <img src={data.character.image} alt="" width={450} height={450} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <div className="character-episode">
          <p style={{fontSize: '1.3em', marginBottom: '2em'}}>Can be seen in episodes below...</p>
          {data.character.episode.map((episode, index) => {
            return <div style={{margin: '5px 0'}} key={index}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Character