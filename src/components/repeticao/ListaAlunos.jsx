import React from 'react'
import alunos from '../../data/alunos'



const ListaAlunos = () => {


 const lis = alunos.map(aluno =>{
  return (
   <li key={aluno.id}>
   {aluno.id} - {aluno.nome} - {aluno.nota}
   </li>
  )
 
 })

 return (
  <div>
   <ul>
    <li>{ lis }</li>
   </ul>
  </div>
 )
}

export default ListaAlunos
