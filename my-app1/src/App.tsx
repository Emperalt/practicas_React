import { useEffect, useState } from "react";
import './App.css';
import Button from './components/Button'
import Input from './components/Input';


function App() {

 const [dateTime, setDateTime] = useState(new Date());  //Permite el la gestión de estados de las variables


 setInterval(() => {  //permite setear el valor de una variable occurrido un evento , en este caso cada segundo
  const date = new Date();
  setDateTime(date);
}, 1000);   

  // useEffect(() => {        //permite realizar un renderización completa del DOM
  //   const timer = setInterval(() => {
  //     const date = new Date();
  //     setDateTime(date);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  let second = dateTime.getSeconds()
  let element =null;

  

  if (second%2===0)
  {
    element=  <Button title={'Segundo Par:'+second.toString()} ></Button>;
  }
  else
  {
    element= <Input placeholder={'Segundo Impar:'+second.toString()} ></Input>;
    
  }

  return (      
    <div className="App">
      <div>
        {dateTime.toString()}  
      </div>
      <header className="App-header">             
        {element}
        </header>
    </div>
  );

}


export default App;
