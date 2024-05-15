import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

    </>
  )
}
