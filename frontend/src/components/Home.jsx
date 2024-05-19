import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'
import TypeCard from './TypeCard';
import '../styles/home.scss'

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

      
    return(
      <>
        <h1>MAIN POKEMONS</h1>
        <section className='pokemondisplay'>
            {pokemon?.map(singlepoke =>(
                <PokeCard
                key={singlepoke.name}
                name={singlepoke.name}
                url={singlepoke.url}
                ></PokeCard>
            ))}
        </section>
        
        <h2>TYPES</h2>
        <section className='typesdisplay'>
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