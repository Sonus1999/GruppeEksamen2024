import PokeCard from './PokeCard'

export default function Home(){
    return(
        <>
        <section>
            <h1>MAIN POKEMONS</h1>
            <PokeCard limit={9} />
        </section>
        <section>
            <h2>TYPES</h2>
        </section>
        </>
    )
}