import React, { useContext } from "react"
import { apiEntrada } from "../../constans/contans";
import { getElementFromApi_} from "../../functions_practica";
import {MyContextUser} from "../../context_practica"
import ScoreContext from "../../Contexts/ScoreContext"



function ScoreCliente  (props:any) {

  const {resultado} = useContext<any>(ScoreContext);  //hijo consume variable del contextos

  return (
    
    <div>  
        <MyContextUser.Consumer>
           {value => (<h1>Score del Cliente: {value}</h1>) }
        </MyContextUser.Consumer>  
          <h3>
            Resultado: {resultado}
            <p>{resultado > 80 ? "(Aprobado)" : "(Rechazado)"} </p>
          </h3>
          <br />
          {apiEntrada.map((value, index) => {
             return value.side === "score" && getElementFromApi_(value, index, props.elementClient,props.elementScore,props.setElementClient,props.setElementScore); //operador ternario(replaza condicion simple if)}}

          })}
    </div>
   );

}

export default ScoreCliente;