import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

//declarando o componente como função
export default function App() {
  //função para renderizar o conteudo HTML do componente
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}