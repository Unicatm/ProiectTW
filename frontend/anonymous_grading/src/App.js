import './App.css';
import Button from './components/Button';
import Register from './classes/Register';
import Login from './classes/Login';
import ProfesorPage from "./classes/Profesor";

import {BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/Register');
  }

  const handleLoginClick = () => {
    navigate('/Login');
  } 

  return (
    <div className="App">
       <title>Anonymous Grading</title>
    <div>
     
      <header>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

        Welcome to Anonymous Grading
      </header>
      <div>
        <Button id="button_register" label="Register" onclick={handleRegisterClick} style={{color: "white"}} />
      </div>
      <div>
        <Button id="button_login" label="Login" onclick={handleLoginClick} style={{color: "white"}} />
      </div>
    </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profesor" element={<ProfesorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
