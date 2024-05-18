import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PokeCard from './PokeCard'

export default function Type() {
  const { type } = useParams()
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}?limit=10`)
      .then(response => response.json())
      .then(data => setPokemon(data.pokemon))
  }, [type])

  return (
    <>
      <h1>{type}</h1>
      {pokemon?.map((singlepoke, index) =>(
              index < 20 && (
                <PokeCard
                key={singlepoke.pokemon.name}
                name={singlepoke.pokemon.name}
                url={singlepoke.pokemon.url}
                ></PokeCard>
            )))}
    </>
  )
}
