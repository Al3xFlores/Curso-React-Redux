import React from 'react';

// import { Container } from './styles';

function ComParametro(props) {
 const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
  return (
   <div>
    <h2>{ props.Titulo }</h2>
    <p>
     <strong>{ props.Aluno }</strong>
     tem nota
     <strong> { props.Nota } </strong>
     e está 
     <strong> {status} </strong>
    </p>
   </div>
  )
}

export default ComParametro;