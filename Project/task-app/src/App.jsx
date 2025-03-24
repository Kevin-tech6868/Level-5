import React from 'react'
import Login from './components/Login'
import Create from './components/Create'
import Task from './components/Task'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/login" element = {<Login/>}/>
          <Route path="/create" element = {<Create/>}/>
          
          <Route path="/" element= {<Task/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
