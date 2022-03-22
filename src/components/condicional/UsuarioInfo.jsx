import React from 'react'
import If from './If'

function UsuarioInfo(props) {
 const usuario = props.usuario || {}
 return (
  <div>
   <If></If>
   Seja bem vindo <strong>{ props.usuario.nome }</strong>
  </div>
 )
}

export default UsuarioInfo
