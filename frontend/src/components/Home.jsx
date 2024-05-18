import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'
import TypeCard from './TypeCard';

export default function Home(){
    const [pokemon, setPokemon] = useState([])
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
          .then(response => response.json())
          .then(data => setPokemon(data.results))
        

          fetch('https://pokeapi.co/api/v2/type')
          .then(response => response.json())
          .then(data => setTypes(data.results));
      }, [])

      console.log(types)
    return(
        <>
        <section className='pokemondisplay'>
            <h1>MAIN POKEMONS</h1>
            {pokemon?.map(singlepoke =>(
                <PokeCard
                key={singlepoke.name}
                name={singlepoke.name}
                ></PokeCard>
            ))}
        </section>
        <section className='typesdisplay'>
            <h2>TYPES</h2>
            {types?.map(type =>(
                <TypeCard 
                key={type.name}
                name={type.name}>
                </TypeCard>
            ))}
        </section>
        </>
    )
}