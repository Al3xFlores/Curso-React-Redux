import React from 'react';

// import { Container } from './styles';

function NumerosAll(props) {

 const { min, max } = props

 const aleatorio = parseInt(Math.random() * (max - min)) + props.min
 return (
  <div>
   <h2>Valor Aleatorio</h2>
   <p><strong>Valor Minimo: </strong> {props.min} </p> 
   <p><strong>Valor Maximo: </strong> {props.max} </p>
   <p><strong>Valor Escolhido: </strong> {aleatorio} </p>
  </div>
 );
}

export default NumerosAll;