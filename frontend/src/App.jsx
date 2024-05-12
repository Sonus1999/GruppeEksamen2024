import { useState } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
