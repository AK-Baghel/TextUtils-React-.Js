import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [enable, setEnable] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setEnable('Light')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");

    }
    else {
      setMode('light');
      setEnable('Dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} enable={enable}/>
        <Alert alert={alert} />

      <Routes>
        <Route exact path="/" element={<TextForm heading='Enter the text to analyze below...' mode={mode} showAlert={showAlert} />}/>
        <Route exact path='/about' element={<About mode={mode}/>}/>
      </Routes>
        
      </BrowserRouter>
    
    </>
  );
}

export default App;
