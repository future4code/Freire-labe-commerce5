import React from 'react';
import './App.css';
import CardProdutos from './components/cardProdutos';
import camiseta1 from "./img/produtos/camiseta1.jpg"
import camiseta2 from "./img/produtos/camiseta2.jpg"
import camiseta3 from "./img/produtos/camiseta3.jpg"
import camiseta4 from "./img/produtos/camiseta4.jpg"
import camiseta5 from "./img/produtos/camiseta5.jpg"
import camiseta6 from "./img/produtos/camiseta6.jpg"



import Header from "./componentes/Header/Header";

import { Filtros } from './components/Filtros';
import Footer from './componentes/Footer/Footer';




class App extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        nome: 'Astronauta no balanço',
        preco: 69,
        foto: camiseta1,
      },
      {
        id: Date.now(),
        nome: 'Nasa basica',
        preco: 79,
        foto: camiseta2,
      },
      {
        id: Date.now(),
        nome: 'Espaço',
        preco: 59,
        foto: camiseta3,
      },
      {
        id: Date.now(),
        nome: 'Balões e astronauta',
        preco: 89,
        foto: camiseta4,
      },
      {
        id: Date.now(),
        nome: 'Coração de astronauta',
        preco: 99,
        foto: camiseta5,
      },
      {
        id: Date.now(),
        nome: 'Planetas',
        preco: 49,
        foto: camiseta6,
      },
    ],
    query: "",
    precoMinimo: "",
    precoMaximo: "",
    parametroNome: "",
    ordenar: 1,
  }

  listaAtualizada = (ev) => {
    this.setState({ query: ev.target.value })
  }

  listaPrecoMinimo = (ev) => {
    this.setState({ precoMinimo: ev.target.value })
  }

  listaPrecoMaximo = (ev) => {
    this.setState({ precoMaximo: ev.target.value })
  }

  listaParametroNome = (ev) => {
    this.setState({ parametroNome: ev.target.value })
  }

  listaOrdenada = (ev) => {
    this.setState({ ordenar: ev.target.value })
  }

  render() {
    const usuarioComponentes = this.state.produtos
      .filter(produto => {
        return produto.nome.toLowerCase().includes(this.state.query.toLocaleLowerCase())
      })
      .filter(produto => {
        return this.state.precoMinimo === "" || produto.preco >= this.state.precoMinimo
      })
      .filter(produto => {
        return this.state.precoMaximo === "" || produto.preco <= this.state.precoMaximo
      })
      .sort((atualProduto, proximoProduto) => {
        switch (this.state.parametroNome) {
          case "nome":
            return this.state.ordenar * atualProduto.nome.localeCompare(proximoProduto.nome)
          default:
            return this.state.ordenar * (atualProduto.preco - proximoProduto.preco)
        }

      })
      .map((produto) => {
        console.log(produto)

        return <CardProdutos
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          foto={produto.foto}
        />
      })
    return (

      <div className="App">
        <Header />

        <Filtros
          query={this.state.query}
          listaAtualizada={this.listaAtualizada}
          precoMinimo={this.state.precoMinimo}
          listaPrecoMinimo={this.listaPrecoMinimo}
          precoMaximo={this.state.precoMaximo}
          listaPrecoMaximo={this.listaPrecoMaximo}
          parametroNome={this.state.parametroNome}
          listaParametroNome={this.listaParametroNome}
          ordenar={this.state.ordenar}
          listaOrdenada={this.listaOrdenada}
        />

        <div className='containerProdutos'>{usuarioComponentes}</div>
        <Footer/>
      </div>
    );
  }
}
export default App
