import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.scss"
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home.js"
import MovieDetails from "./components/MovieDetails/MovieDetails.js"
import PageNotFound from "./components/PageNotFound/PageNotFound.js"
import Footer from "./components/Footer/Footer.js"
function App() {
  return (
 <div className="app">
  <Router>
    <Header />
    <div className="container">
    <Routes >
    <Route path="/"  element={<Home/>}/>
    <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    
    </Routes>
    </div>
    <Footer/>
  </Router>
 </div>
      
  );
}

export default App;
