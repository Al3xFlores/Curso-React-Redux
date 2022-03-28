import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function DiretaPai(props) {
 
 function fornecerInormacoes(nome, idade, nerd) {
  console.log(nome, idade, nerd)
 }

  return (
    <div>
     <div>Pai</div>
     <IndiretaFilho quandoClicar={fornecerInormacoes}/>
    </div>
  )
}
