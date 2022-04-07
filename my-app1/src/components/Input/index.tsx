// import React from "react";
import './input.css'

export interface InputProps {
    placeholder?:string
   }

      
   function Input (props: InputProps){
     return (
         <div>
            <label>Ingrese dato:</label>
            <input className='Input-ini' placeholder={props.placeholder} />
         </div>
     )
   }
   
   export default Input;