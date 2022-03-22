import React from 'react'
import alunos from '../../data/alunos'

const alunosJSX = alunos.map(aluno => {
 return (
  <li key={aluno.id}>
   {aluno.id}) {aluno.nome}  {aluno.nota}
  </li>
 );
})

const ListaAlunos = () => {
 return (
  <div>
   <ul>
    <li>{alunosJSX}</li>
   </ul>
  </div>
 )
}

export default ListaAlunos
