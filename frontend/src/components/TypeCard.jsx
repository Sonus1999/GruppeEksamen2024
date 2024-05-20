import { Link } from 'react-router-dom';
import '../styles/cards.scss'

export default function TypeCard({name}){
    return(
        <article className={`type-card ${name}`}>
            {name == "poison" ? 
                <img src={`https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png`} alt={name} />
                : 
                <img src={`https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${name}.png`} alt={name} />
            }
            <p>
                <Link to={`/${name}`}>{name}</Link>
            </p>
        </article>
    )
}
