import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Layout({children}){
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault()
        navigate(`/searchresults/${search}`)
    }
    
    
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">UIN POKEDEX</Link></li>
                    <li><Link to="/teams">TEAMS</Link></li>
                </ul>
            </nav>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Pokemon"
            />
          <button type="submit">Search</button>
        </form>
        </header>
        <main>
        {children}
        </main>
        </>
    )
}