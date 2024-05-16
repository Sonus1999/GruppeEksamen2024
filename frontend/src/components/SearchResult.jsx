import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SearchResult() {
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Tilbakestill error og pokemonData når pokemon endrer seg
    setError(false)
    setPokemonData(null)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setPokemonData(data)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }, [pokemon])



  return (
    <div>
      {error ? (
        <p>Finner ikke noen pokemon med navnet "{pokemon}" </p>
      ) : pokemonData ? (
        <div>
          <h1>
            <Link to={`/pokemons/${pokemonData.name}`}>{pokemonData.name}</Link>
          </h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}