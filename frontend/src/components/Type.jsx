import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Type() {
  const { type } = useParams()
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => setPokemon(data.pokemon))
  }, [type])

  return (
    <>
      <h1>{type}</h1>
      {pokemon.map((pokemon, index) => (
        <p key={index}>
          <Link to={`/pokemons/${pokemon.pokemon.name}`}>{pokemon.pokemon.name}</Link>
        </p>
      ))}
    </>
  )
}
