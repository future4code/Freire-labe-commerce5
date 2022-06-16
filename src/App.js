import React from 'react';
import './App.css';
import  CardProdutos  from './components/cardProdutos';
import camiseta1 from "./img/produtos/camiseta1.jpg"
import camiseta2 from "./img/produtos/camiseta2.jpg"
import camiseta3 from "./img/produtos/camiseta3.jpg"
import camiseta4 from "./img/produtos/camiseta4.jpg"
import camiseta5 from "./img/produtos/camiseta5.jpg"
import camiseta6 from "./img/produtos/camiseta6.jpg"
import Header from "./componentes/Header/Header";


class App  extends React.Component{
  state = {
     produtos:[
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta1,
    },
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta2,
    },
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta3,
    },
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta4,
    },
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta5,
    },
    {
      id: Date.now(),
      nome: 'Camiseta',
      preco: 10,
      foto: camiseta6,
    },
  ]
}
  render(){
    const usuarioComponentes = this.state.produtos.map((produto) => 
    {console.log(produto)
       
      return<CardProdutos
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          foto={produto.foto} 
        /> 
    })
  return (
    <div className="App">
      <Header />
      <div className='containerProdutos'>{usuarioComponentes}</div>

   

    </div>
  );
  }
}
export default App
