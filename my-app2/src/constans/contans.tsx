import { elementApi } from "../interface/interface";

export const apiEntrada: elementApi[] = [
    {
      name: 'Id',
      type: 'input',
      class: 'Input-ini2',
      side: 'personal'
    },
    {
      name: 'Nombre',
      type: 'input',
      class: 'Input-ini',
      side: 'personal'
    },

     { name: 'Apellido',
      type: 'input',
      class: 'Input-ini',
      side: 'personal'
    },
   
    {
      name: 'Direccion',
      type: 'input',
      class: 'Input-ini2',
      side: 'personal'
    },
    {
      name: 'Telefono',
      type: 'input',
      class: 'Input-ini',
      side: 'personal'
    },
    
    {
      name: 'Parroquia',
      type: 'select',
      class: 'Input-ini',
      side: 'personal',
      options: [
                {
                  id :'0',
                  name: 'Condado',
                  value: 'Condado'
                },
                {
                  id :'1',
                  name: 'Carcelen',
                  value: 'Carcelen'
                }


                ]
    },
    {
      name: 'Guardar',
      type: 'button',
      class: 'Button-ini',
      side: 'personal',
      //miFunction: (mensaje?:any) =>  alert('Ha presionado: '+mensaje) // funcion de fecha sin corchetes ni return
    },
    {
      name: 'Cancelar',
      type: 'button',
      class: 'Button-can',
      side: 'personal',
      //miFunction: (mensaje:any)=>{   alert('Ha presionado: '+mensaje)}
    },
    
    {
      name: 'Garantías',
      type: 'select',
      class: 'Input-ini',
      side: 'score',
      options: [
                {
                  id :'0',
                  name: 'Si',
                  value: '20'
                },
                {
                  id :'1',
                  name: 'No',
                  value:'0'
                }


                ]
    },
    {
      name: 'Calificación Auditor',
      type: 'select',
      class: 'Input-ini',
      side: 'score',
      options: [
                {
                  id :'0',
                  name: 'A',
                  value:'40'
                },
                {
                  id :'1',
                  name: 'B',
                  value:'30'
                },
                {
                  id :'2',
                  name: 'C',
                  value:'20'
                },
                {
                  id :'3',
                  name: 'D',
                  value:'10'
                }


                ]
    },
    {
      name: 'Años Experiencia',
      type: 'select',
      class: 'Input-ini',
      side: 'score',
      options: [
                {
                  id :'0',
                  name: 'Menor 5 años',
                  value:'10'
                },
                {
                  id :'1',
                  name: 'Entre 5 y 10 años',
                  value:'20'

                },
                {
                  id :'2',
                  name: 'Mayor 10 años',
                  value:'40'
                },
                ]
    },
    {
      name: 'Tipo de Riego',
      type: 'select',
      class: 'Input-ini',
      side: 'score',
      options: [
                {
                  id :'0',
                  name: 'Automático',
                  value:'30'
                },
                {
                  id :'1',
                  name: 'Hibrido',
                  value:'20'

                },
                {
                  id :'2',
                  name: 'Manual',
                  value:'0'
                },
                ]
    },
     {
      name: 'Editar',
      type: 'button',
      class: 'Button-ini',
      side: 'score',
      miFunction: (mensaje:any)=>{   alert('Ha presionado: '+mensaje)}
    },
  ];