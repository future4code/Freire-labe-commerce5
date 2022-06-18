import React from "react";
import "./App.css";
import styled from "styled-components";
import CardProdutos from "./components/cardProdutos";
import camiseta1 from "./img/produtos/camiseta1.jpg";
import camiseta2 from "./img/produtos/camiseta2.jpg";
import camiseta3 from "./img/produtos/camiseta3.jpg";
import camiseta4 from "./img/produtos/camiseta4.jpg";
import camiseta5 from "./img/produtos/camiseta5.jpg";
import camiseta6 from "./img/produtos/camiseta6.jpg";
import Header from "./componentes/Header/Header";
import Carrinho from "./componentes/Carrinho/Carrinho";

const ContainerHeader = styled.div`
  background: url("https://i.pinimg.com/originals/85/15/d5/8515d58fac0934d5ee88fc83d72de7af.jpg");
  color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.3;
  box-sizing: border-box;
`;

class App extends React.Component {
  state = {
    carrinho: [],
    produtos: [
      {
        id: 1,
        nome: "Camiseta1",
        preco: 10,
        foto: camiseta1,
        quantidade: 0,
      },
      {
        id: 2,
        nome: "Camiseta2",
        preco: 10,
        foto: camiseta2,
        quantidade: 0,
      },
      {
        id: 3,
        nome: "Camiseta",
        preco: 10,
        foto: camiseta3,
        quantidade: 0,
      },
      {
        id: 4,
        nome: "Camiseta",
        preco: 10,
        foto: camiseta4,
        quantidade: 0,
      },
      {
        id: 5,
        nome: "Camiseta",
        preco: 10,
        foto: camiseta5,
        quantidade: 0,
      },
      {
        id: 6,
        nome: "Camiseta",
        preco: 10,
        foto: camiseta6,
        quantidade: 0,
      },
    ],
    sidebar: false,
    quantidade: 0,
  };

  abreListaDeCompras = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  //FUNÇÃO QUE FUNCIONA MAIS OU MENOS
  // adicionarCarrinho = () => {
  //   this.setState({ quantidade: this.state.quantidade + 1 });
  //   console.log(this.state.produtos[2])
  // };

  adicionarCarrinho = (produtoId) => {
    const produto = this.state.produtos.find(item => produtoId === item.id);
    console.log(produto);
  };

  removerCarrinho = () => {
    this.setState({ quantidade: this.state.quantidade - 1 });
  };

  render() {
    const usuarioComponentes = this.state.produtos.map((produto) => {
      return (
        <CardProdutos
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          foto={produto.foto}
          botao={this.adicionarCarrinho}
        />
      );
    });

    return (
      <div className="App">
        <ContainerHeader>
          <Header />
          <Carrinho
            produtos={this.state.produtos}
            abreLista={this.abreListaDeCompras}
            sideBar={this.state.sidebar}
            quantidade={this.state.quantidade}
            removerDoCarrinho={this.removerCarrinho}
            nomeDoProduto={this.state.produtos.nome}
          />
          {/* <Carrinho
            produtos={this.state.produtos}
            sideBar={this.state.sidebar}
          /> */}
        </ContainerHeader>

        <div className="containerProdutos">{usuarioComponentes}</div>
      </div>
    );
  }
}
export default App;
