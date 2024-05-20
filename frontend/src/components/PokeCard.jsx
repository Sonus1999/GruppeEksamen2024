import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../styles/cards.scss'

export default function PokeCard({name, url, type}){
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        fetch(`${url}`)
          .then(response => response.json())
          .then(data => setPokemonInfo(data))
          .catch(error => console.error('Error fetching Pokemon data:', error));
    }, [url])

    const formatId = (id) => {
        return id.toString().padStart(3, '0'); // Ensure ID has at least 3 digits
    }

    return(
        <>
        {pokemonInfo ? (
            <article className={`pokecard ${type}`}>
                <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
                <h3>
                    <Link to={`/pokemons/${name}`}>{name}</Link>
                </h3>
                <p>#{formatId(pokemonInfo.id)}</p>
            </article>
        ) : (
            <p>Loading...</p>
        )}
        </>
    )
}