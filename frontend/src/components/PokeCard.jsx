import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function PokeCard({name, url}){
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
        fetch(`${url}`)
          .then(response => response.json())
          .then(data => setPokemonInfo(data))
          .catch(error => console.error('Error fetching Pokemon data:', error));
    }, [url])

    return(
        <>
        {pokemonInfo ? (
            <article className="pokecard">
                <p>
                    <Link to={`/pokemons/${name}`}>{name}</Link>
                </p>
                <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
                <p>#00{pokemonInfo.id}</p>
            </article>
        ) : (
            <p>Loading...</p>
        )}
        </>

    )
}