import { useEffect, useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import { apiEntrada } from "./constans/contans";
import { Personaje } from "./interface/interface";


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


function App() {
  
  const [elementScore, setElementScore] = useState([]);
  const [elementClient, setElementClient] = useState([]);
  const [resultado, setResultado] = useState(0);
  const {busqueda,setBusqueda, heroes}= useBusqueda();  //USO DE HOOK PERSONALIZADO

  const inputEl= useRef<any>({});   //hook useRef para cambiar color de boton
  const inputBuscarRef= useRef<any>(''); // HOOK useRef para validar si campo busqueda esta lleno
  
// VARIABLES CONTEXT API  

  let getElementFromApi = (value: any, index: any) => {  //RENDERIZAR COMPONENTE DE ACUERDO AL TIPO
    if (value.type === "button")
      return <Button key={index} property={value}></Button>;

    if (value.type === "input")
      return (
        <Input
          key={index}
          property={value}
          state={value.side === "personal" && elementClient}
          setState={setElementClient}
        ></Input>
      );

    if (value.type === "select")
      return (
        <Select
          key={index}
          property={value}
          state={value.side === "score"?elementScore:elementClient}
          setState={value.side === "score"?setElementScore:setElementClient}
        ></Select>
      );
  };



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
    <div className="App">
      <h1>Datos Clientes</h1>
      <form
        className="divDatos"
        onSubmit={(event) => envioDatosClientes(event)}
      >
        <div className="divCliente">
          <h1>Datos Personales</h1>
          {apiEntrada.map((value, index) => {
            return value.side === "personal" && getElementFromApi(value, index); //operador ternario(replaza condicion simple if)
          })}
        </div>

        <div className="divCliente">
          <h1>Score Cliente</h1>
          <h3>
            Resultado: {resultado}
            <p>{resultado > 80 ? "(Aprobado)" : "(Rechazado)"} </p>
          </h3>
          <br />
          {apiEntrada.map((value, index) => {
            return value.side === "score" && getElementFromApi(value, index);
          })}
        </div>
      </form>
      <h1>Formularios y uso de Fetch</h1>
      <form className="divCliente" onSubmit={(e) => buscar(e)}>
        Busque su Heroe:{" "}
        <input
          ref={inputBuscarRef}
          className="buscar"
          onChange={(e) => setBusqueda(e.target.value)}
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <br /> Su busqueda ha devuelto <b>{heroes.length}</b> resultados:
      <br />
      <hr />
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
      <br />
      <hr />
      <h1>Uso de Hooks</h1>
      <div>
          <button style={{ width: "200px", height: "40px",fontSize:"15px" }} ref={inputEl}>Estoy siendo referenciado</button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
