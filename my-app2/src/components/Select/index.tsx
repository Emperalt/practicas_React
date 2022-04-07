import React from "react"
import { elementApi } from "../../interface/interface";
import './select.css'

export interface SelectProps {
  property :elementApi
  setState?: CallableFunction
  state?: any
 }



function Select (props: SelectProps){

  const setearValorSelected = (e:any)=>{
    (props.state) && props.setState?.({...props.state,[props.property.name]:e})   //punto clave para setear valor en arreglo de estado en la posición del indice
  }


   return (
      <div>
        <label htmlFor={props.property.name}> {props.property.name}</label>
        <select className={props.property.class}  id={props.property.name} defaultValue={'0'} onChange={(e) => setearValorSelected(e.target.value)}>  
          <option disabled key={0} value={'0'}  >{'Seleccione '+props.property.name}</option>       
          {props.property.options?.map((value, index) => {
            return <option  key={index+1} value={value.value} >{value.name}</option>          
          })          
          
          }
        </select>
      </div>
  )
}

export default Select;