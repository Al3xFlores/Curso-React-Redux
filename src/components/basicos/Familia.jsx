import React from 'react'
import { cloneElement } from 'react/cjs/react.production.min'




const Familia = (props) => {
 return (
  <div>
   { props.children.map((child) => {
    return cloneElement(child, {...props})
   })}
  </div>
 )
}

export default Familia
