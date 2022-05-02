import React from 'react';

import './App.css'
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import NumerosAll from './components/basicos/NumerosAll'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input';


function App() {
  return (
    <div>
      <div className='Cards'>


        <Card titulo='#11 - Componente controlado' color='#8BAD35'>
          <Input />
        </Card>

        <Card titulo='#10 - Comunicação Indireta' color='#8BAD39'>
          <IndiretaPai />
        </Card>

        <Card titulo='#09 - Comunicação direto' color='#593223C'>
          <DiretaPai />
        </Card>

        <Card titulo='Renderização condicional' color='#982395'>
         <ParOuImpar numero={5}>
         </ParOuImpar>
        </Card>

        <Card titulo='Tabela Produtos/repetição' color='#FF432E'>
        <TabelaProdutos />
        </Card>

        <Card titulo='Repetição' color='#FF4C65'>
        <ListaAlunos />
        </Card>

        <Card titulo='Componente com filhos' color='#00C8F8'>
          <Familia sobrenome='Ferreira'>
          <FamiliaMembro nome='Alex'  />
          <FamiliaMembro nome='Gustavo'  />
          <FamiliaMembro nome='Ana'  />
          </Familia>
        </Card>

        <Card titulo='Desafio Aleatorio' color='#FA6900'>
          <NumerosAll min={1} max={60} />
        </Card>

        <Card titulo='Primeiro componente' color='#E94C6F'>
          <Primeiro />
        </Card>

        <Card titulo='Com parametro' color='#588C73'>
          <ComParametro
            Titulo='Segundo Componente'
            Aluno='Pedro' Nota={9.5} />
        </Card>
      </div>



    </div>
  );
}

export default App;