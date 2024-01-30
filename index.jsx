import React from 'react'
import ReactDOM from 'react-dom/client'

import Nav from "./components/Nav/Nav"
import Badges from "./components/Badge/Badges"
import Banners from "./components/Banner/Banners"
import Cards from "./components/Card/Cards"
import Testimonials from "./components/Testimonial/Testimonials"

import Menu from "./components/Menu/index"
import Star from "./components/Star/Star"


function App() {
  return (
    <div className="container">
      <Nav />
      <Badges />
      <Banners />
      <Cards />
      <Testimonials />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
