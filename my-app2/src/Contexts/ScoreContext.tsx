import React, {useState} from "react";
import { JsxElement } from "typescript";

const Context = React.createContext({});

export interface ProviderChildren {

    children? : JSX.Element
}

export function ScoreContextProvider (props: ProviderChildren ) {
    const [resultado, setResultado] = useState(0);

    return(
      <Context.Provider value={{resultado, setResultado}}>
          { props.children}
      </Context.Provider>
         
    )

}

export default Context;