import React from 'react'
import { cloneElement } from 'react/cjs/react.production.min'




const Familia = (props) => {
 return (
  <div>
   { React.Children.map(props.children, child => {
    return cloneElement(child, props)
   })
   }
  </div>
 )
}

export default Familia
