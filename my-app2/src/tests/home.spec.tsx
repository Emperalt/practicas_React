import React ,{ useEffect, useState, useRef,useContext } from "react";
import { getElementFromApi_} from "../functions_practica";
import Button from "../components/Button";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const [elementScore, setElementScore] = useState([]);
 const [elementClient, setElementClient] = useState([]);

const myInput = {
    name: 'Telefono',
    type: 'input',
    class: 'Input-ini',
    side: 'personal'
  }

describe('Button Component ', () => {    //para agrupar un conjunto de pruebas

    //beforeEach(()={}) para ejecutar por cada prueba 
   
    //it('renders content') //forma alternativa a test   
    test('renders content',()=>{
        const myInput = {
            name: 'Telefono',
            type: 'input',
            class: 'Input-ini',
            side: 'personal'
        }

     //const Component =   getElementFromApi_(myInput, 1, elementClient, elementScore, setElementClient, setElementScore) 

    const component =render(<Button key={1} property={myInput} ></Button>)
    //const component =render(<Component></Component>)
    
    //Forma corta de ejecutar una prueba
        component.getByText('Telefono');

    //Forma dos 
        expect(component.container).toHaveTextContent(myInput.name);  
        expect(component.container).toHaveTextContent('Telefon');  

        component.debug(); 

    })
})