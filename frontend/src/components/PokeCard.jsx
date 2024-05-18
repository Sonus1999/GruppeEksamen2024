import { Link } from "react-router-dom"
export default function PokeCard({name}){
    return(
        <>
        <article className="pokecard">
            <p>
            <Link to={`/pokemons/${name}`}>{name}</Link>
            </p>
        </article>
        </>
    )
}