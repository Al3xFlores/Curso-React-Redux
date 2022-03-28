import React from 'react';

// import { Container } from './styles';

function DiretaFilho(props) {
  return (
   <div>
   <span>{props.texto} </span>
   <span>{props.numero} </span>
   <span>{props.bool ? 'Verdadeira' : 'Falso'}</span>
  </div>
  )
  
}

export default DiretaFilho;