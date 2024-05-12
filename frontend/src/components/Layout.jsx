import { Link } from "react-router-dom";


export default function Layout({children}){
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">UIN POKEDEX</Link></li>
                    <li><Link to="/teams">TEAMS</Link></li>
                </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        </>
    )
}