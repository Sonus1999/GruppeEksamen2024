import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
          .then(response => response.json())
          .then(data => setPokemon(data.results))
      }, [])

      console.log(pokemon)
    return(
        <>
        <section>
            <h1>MAIN POKEMONS</h1>
            {pokemon.map(singlepoke =>(
                <p key={singlepoke.name}>
                    <Link to={`/pokemons/${singlepoke.name}`}>{singlepoke.name}</Link>
                </p>
            ))}
        </section>
        <section>
            <h2>TYPES</h2>
        </section>
        </>
    )
}