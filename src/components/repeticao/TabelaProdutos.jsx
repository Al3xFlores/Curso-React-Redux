import React from "react";
import produtos from "../../data/produtos";

export default function TabelaProdutos() {
 
  const listaProdutos = produtos.map(produto => {
   return (
    <li> 
     {produto.id} - {produto.nome} - {produto.preco}
    </li>
   )
  })
     
  return (
    <div>
      <ul>
        <li>{listaProdutos}</li>
      </ul>
    </div>
  );
}
