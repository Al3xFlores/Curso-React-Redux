import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function DiretaPai(props) {

  /*Estado dos atributos*/ 
  
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(true)
  /* Fim estado*/

 //nome, idade, nerd
 function fornecerInformações(nome, idade, nerd) {
   setNome(nome)
   setIdade(idade)
   setNerd(nerd)
 }
  return (
  <div>
     <div>
       <span>{nome} </span>
       <span><strong>{idade}</strong></span>
       <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
     </div>
    <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
  </div>
  )
}
