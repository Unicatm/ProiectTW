import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Register from './Register';
import Login from './Login';
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
      </Routes>
    </Router>
  );
}

export default App;
