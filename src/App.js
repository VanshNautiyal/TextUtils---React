
import { useState } from 'react';
import './App.css';
import Textforms from './components/Textforms';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
{/*import Alert from './components/About';*/}

{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/}



function App() {
  const [mode, setMode] = useState('light'); // Weather the dark mode is enabled or not
  const [alert, setAlert] = useState(null); // alert ko m object bnaunga

  const showAlert=(messages, type) =>{      // ye ek function hai jo ki humko help karega alert messages ko show krnai mai
    setAlert({
      msg: messages,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode=() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title = "TextUtils" mode = {mode} togglemode = {togglemode}/>
    <Alert  alert = {alert}/>
    <div className="container my-3">
    <Textforms showAlert= {showAlert} mode = {mode} Heading = "Enter the text to analyze"/>

    {/*<Switch>
          <Route path="/about">*/}
            {/*<About />*/}
            {/*</div>*/}
          {/*</Router>*</Route>*/}
          
          {/*<Route path="/">*/}
            
          {/*</Route>*/}
    {/*</Router></Switch>*/}
    
    </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
