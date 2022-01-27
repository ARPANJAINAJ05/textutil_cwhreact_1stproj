// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import About from "./components/About";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const toggle=()=>{
    if(mode==='light')
    {setmode('dark');
document.body.style.backgroundColor='black';
showalert("dark mode has been enabled","success");
    }
    else
    {document.body.style.backgroundColor='white';
      setmode('light');
      showalert("light mode has been enabled","success");
    }
  }
   const [alert, setalert] = useState(null);
   const showalert=(msg,type)=>{
     setalert({message:msg,
     type:type
   })
  setTimeout(()=>{setalert(null);},2000);
   }
  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtil" navmode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />}> </Route>
          </Routes> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />
        </div>
     
      
      {/* </Router>  */}
     
    </>
  );
}

export default App;
