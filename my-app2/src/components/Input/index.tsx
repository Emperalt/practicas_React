// import React from "react";
import { elementApi } from "../../interface/interface";
import "./input.css";

export interface InputProps {
  property: elementApi;
  setState?: CallableFunction;
  state?: any;
}

function Input(props: InputProps) {

  const setearValor = (e: any) => {
    props.state &&
    props.setState?.({ ...props.state, [props.property.name]: e }); //punto clave para setear valor en arreglo de estado en la posición del indice
  
  };

  return (
    <div>
      <label htmlFor={props.property.name}>{props.property.name} :</label>
      <input
        id={props.property.name}
        className={props.property.class}
        placeholder={"Ingrese " + props.property.name}
        onChange={(e) => setearValor(e.target.value)}  //validar porque no usar target.value con onSubmit
      />
    </div>
  );
}

export default Input;
