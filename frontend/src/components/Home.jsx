import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'

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
            
        </section>
        <section>
            <h2>TYPES</h2>
        </section>
        </>
    )
}