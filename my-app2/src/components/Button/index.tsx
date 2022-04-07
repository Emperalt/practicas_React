import React from "react"
import { elementApi } from "../../interface/interface"
import './button.css'


export interface ButtonProps{
  property: elementApi
}


const Button =  (props: ButtonProps)=>

         <button onClick={()=>props.property.miFunction?.('boton '+props.property.name)} className={props.property.class}> {props.property.name}</button> 

export default Button;