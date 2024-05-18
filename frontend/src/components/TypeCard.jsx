import { Link } from "react-router-dom"
export default function TypeCard({name}){
    return(
        <>
        <article className={name}>
            <p>
            <Link to={`/${name}`}>{name}</Link>
            </p>
        </article>
        </>
    )
}