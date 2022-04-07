// import React from "react"
import './button.css'

export interface ButtonProps {
 title:string
}

function Button (props: ButtonProps){
  return (
      <div>
        <button className="Button-ini"> {props.title}</button>
      </div>
  )
}

export default Button;