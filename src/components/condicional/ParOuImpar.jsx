import React from 'react'

const ParOuImpar = (props) => {

 const IsPar = props.numero % 2 === 0 //Verifica se o numero é par

 return (
  <div> 
   { IsPar ? <span>Par</span> :  <span>Impar</span> } 
  </div>
 )
}

export default ParOuImpar
