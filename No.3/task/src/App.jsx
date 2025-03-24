import React from 'react'
import Login from "./components/Login";
import CreateAccount from './components/CreateAccount';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create" element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
