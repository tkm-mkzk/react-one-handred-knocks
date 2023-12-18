import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Counter from './pages/Counter/Counter'
import Todo from './pages/Todo/Todo'
import Timer from './pages/Timer/Timer'
import Calc from './pages/Calc/Calc'
import Profile from './pages/Profile/Profile'
import Weather from './pages/Weather/Weather'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App
