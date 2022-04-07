import React ,{ useEffect, useState, useRef, useContext } from "react";
import {ScoreContextProvider} from "./Contexts/ScoreContext"
import Home from "./home";




function App() {

  

  return (
    // establecer contexto 
    <ScoreContextProvider>  
       <Home></Home> 
    </ScoreContextProvider>
  );
}

export default App;
