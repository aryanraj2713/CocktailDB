import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import CocktailList from './components/CocktailList'
function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route exact path="*" element={<Error/>}/>


        

      </Routes>
    </BrowserRouter>

  )
}

export default App
