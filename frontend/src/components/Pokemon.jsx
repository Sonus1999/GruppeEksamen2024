import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {
  const { pokemon } = useParams()
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await response.json()
      setPokemonInfo(data)

      data.abilities.forEach(async (ability) => {
        const abilityResponse = await fetch(ability.ability.url)
        const abilityData = await abilityResponse.json()
        setAbilities(oldAbilities => [...oldAbilities, abilityData])
      })
    }

    fetchPokemonInfo()
  }, [pokemon])

  return (
    <>
      {pokemonInfo ? (
        <section>
          <h1>{pokemonInfo.name}</h1>
          <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
          <h2>Types</h2>
          <ul>
            {pokemonInfo.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h2>Stats</h2>
          <ul>
            {pokemonInfo.stats.map((stat, index) => (
              <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
          <h2>Abilities</h2>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index}>
                {ability.name}
                <p>{ability.effect_entries.find(entry => entry.language.name === 'en').effect}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>Laster inn...</p>
      )}
    </>
  )
}
