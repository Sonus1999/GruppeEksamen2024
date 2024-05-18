import { Link } from "react-router-dom"
export default function TypeCard({name}){
    return(
        <>
        <article className={name}>
            <p>
            <Link to={`/${name}`}>{name}</Link>
            </p>
            {name == "poison" ? <img src={`https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png`}></img>
            : <img src={`https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${name}.png`}></img>}
        </article>
        </>
    )
}