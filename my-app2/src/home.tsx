import React ,{ useEffect, useState, useRef,useContext } from "react";
import "./App.css";
import { apiEntrada } from "./constans/contans";
import { Personaje } from "./interface/interface";
import { getElementFromApi_} from "./functions_practica";
import ScoreCliente from "./components/ScoreCliente";
import {MyContextUser} from "./context_practica"
import ScoreContext from "./Contexts/ScoreContext"



function useBusqueda(){  //hook personalizado, inicializa estados Y efectos en variables

  const p: Personaje[] = [];
  const [busqueda, setBusqueda] = useState("");
  const [heroes, setHeroes] = useState(p);
  

  useEffect(()=> {
    if (busqueda.length > 2) {  
   
      fetch(
        `http://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=19&title=${busqueda}`
      )
        .then((response) => {
          return response.json();
        })
        .then((resultadoHeroes) => {
          setHeroes(resultadoHeroes);
        })
        .catch((error) => {
          console.log("Hubo un error" + error);
        });
    } else {
      setHeroes(p);
    } 

  },[busqueda])

  return {busqueda,setBusqueda,heroes}
}


function Home() {

  const [elementScore, setElementScore] = useState([]);
  const [elementClient, setElementClient] = useState([]);
  const {busqueda,setBusqueda, heroes}= useBusqueda();  //USO DE HOOK PERSONALIZADO

  const inputEl= useRef<any>({});   //hook useRef para cambiar color de boton
  const inputBuscarRef= useRef<any>(''); // HOOK useRef para validar si campo busqueda esta lleno
  const {setResultado} = useContext<any>(ScoreContext);  //Hijo va a consumir propiedades del contexto

  useEffect(() => {  //RECALCULAR RESULTADO DEPENDIENDO DEL CAMBIO DE LAS VARIABLES DE SCORE
    let puntos: number = 0;
    // console.log(elementScore);
    for (const p in elementScore) {
      puntos = puntos + parseInt(elementScore[p]);
    }
    setResultado(puntos);
  }, [elementScore]);


  const buscar = (event: any) => {
    event.preventDefault(); //previene comportamiento por defecto del formulario
    
    if (busqueda.length<=2){  //aplicar uso de useRef
      inputBuscarRef.current.style.border=" 5px solid red"
      inputBuscarRef.current.focus();
    }
    else
    {
      inputBuscarRef.current.style.border=" 5px solid green"
    }

  };


  const envioDatosClientes = async (event: any) => {
    event.preventDefault();
   
    const elementTotal =  Object.assign(elementScore,elementClient);
    console.log(elementTotal);

    var response = await fetch(
      "http://bp-marvel-api.herokuapp.com/marvel-characters",
      {
        method: "POST",
        body: JSON.stringify(elementTotal),
      } //envio de body al API
    );
    var jsonResponse = await response.json();
    
    console.log(jsonResponse);
  };


 
   setInterval(() => {  //permite setear el valor de una variable occurrido un evento , en este caso cada segundo
     const second:number = new Date().getSeconds();
      try{ 
        (second%2===0)?inputEl.current.style.backgroundColor="#3f517d":inputEl.current.style.backgroundColor="#ffe433"    
      }
      catch(e){
       // console.log('Error: '+e)
      }
     }, 1000);   

  return (
    
    <MyContextUser.Provider value="EddyManuel">
    
       <MyContextUser.Consumer>
          {(value)=>  (  
                        <div  className="divHeader">
                          Bienvenid@: <b>{value}</b>
                        </div>   )
           }
        </MyContextUser.Consumer> 
     
    <div className="App">
      <h1>Datos Clientes</h1>
      <form
        className="divDatos"
        onSubmit={(event) => envioDatosClientes(event)}
      >
        <div className="divCliente">
          <h1>Datos Personales</h1>
          {apiEntrada.map((value, index) => {
            // return value.side === "personal" && getElementFromApi(value, index); //operador ternario(replaza condicion simple if)
            return value.side === "personal" && getElementFromApi_(value, index, elementClient,elementScore,setElementClient,setElementScore); //operador ternario(replaza condicion simple if)}}
          })}
        </div>

        <div className="divScore">
              <ScoreCliente  elementClient ={elementClient} elementScore={elementScore} setElementClient={setElementClient} setElementScore={setElementScore}> </ScoreCliente>
        </div>
      </form>

      <h1>Formularios y uso de Fetch</h1>
      <form className="divBusqueda" onSubmit={(e) => buscar(e)}>
        Busque su Heroe:{" "}
        <input
          ref={inputBuscarRef}
          className="buscar"
          onChange={(e) => setBusqueda(e.target.value)}
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <div className="divScore">
        <br /> Su busqueda ha devuelto <b>{heroes.length}</b> resultados:
        <br /> <hr />
        <div className="divResultado">
          {heroes.map((heroe, index) => {
            return (
              <div key={index}>
                <label className="titulo">{heroe.title}</label>
                <img className="imagenPersonaje" src={heroe.image} alt=""></img>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      
      <h1>Uso de Hooks</h1>
      <div>
          <button style={{ width: "200px", height: "40px",fontSize:"15px" }} ref={inputEl}>Estoy siendo referenciado</button>
      </div>
      <br />
      <br />
    </div>
    </MyContextUser.Provider>
    
  );
}

export default Home;
