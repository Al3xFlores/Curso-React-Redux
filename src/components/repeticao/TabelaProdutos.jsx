import React from 'react'
import produtos from '../../data/produtos'



const TabelaProdutos = () => {

 function getLinhas () {
  return produtos.map(produto => {
   return (
    <tr>
     <td>{produto.id}</td>
     <td>{produto.nome}</td>
     <td> R$ {produto.preco}</td>
    </tr>
   )
  })
 }

 return (
  <div>
   <table border='1'>
    <thead>
     <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Preco</th>
     </tr>
    </thead>
    <tbody>
     {getLinhas()}
    </tbody>
   </table>
  </div>
 )
}

export default TabelaProdutos