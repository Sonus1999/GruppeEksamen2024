import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/pokemon.scss'

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
          <div className='pokemon-container'>
            <div className='pokemon-header'>
              <h1>{pokemonInfo.name}</h1>
              <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
            </div>
            <section className='pokemon-types'>
              <h2>Types</h2>
              <ul className='type-list'>
                {pokemonInfo.types.map((type, index) => (
                  <li key={index} className={type.type.name}>{type.type.name} </li>
                ))}
              </ul>
              <h2>Stats</h2>
              <ul>
                {pokemonInfo.stats.map((stat, index) => (
                  <li key={index} className='stat-item'>
                    <span className='stat-name'>{stat.stat.name}:</span>
                    <span className='stat-value'>{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <h2>Abilities</h2>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index} className='ability-name'>
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
