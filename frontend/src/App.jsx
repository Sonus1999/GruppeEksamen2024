import { useState } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Teams from './components/Teams'
import Type from './components/Type'
import SearchResults from './components/SearchResult'
import Pokemon from './components/Pokemon'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/:type" element={<Type />} />
        <Route path="/searchresults/:pokemon" element={<SearchResults />} />
        <Route path="/pokemons/:pokemon" element={<Pokemon />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
