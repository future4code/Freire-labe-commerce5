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
import { Filtros } from "./components/Filtros";
import Footer from "./componentes/Footer/Footer";

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
    produtos: [
      {
        id: 1,
        nome: "Astronauta no balanço",
        preco: 69,
        foto: camiseta1,
      },
      {
        id: 2,
        nome: "Nasa basica",
        preco: 79,
        foto: camiseta2,
      },
      {
        id: 3,
        nome: "camisa",
        preco: 59,
        foto: camiseta3,
      },
      {
        id: 4,
        nome: "Balões e astronauta",
        preco: 89,
        foto: camiseta4,
      },
      {
        id: 5,
        nome: "Coração de astronauta",
        preco: 99,
        foto: camiseta5,
      },
      {
        id: 6,
        nome: "Planetas",
        preco: 49,
        foto: camiseta6,
      },
    ],
    cart: [],
    query: "",
    precoMinimo: "",
    precoMaximo: "",
    parametroNome: "",
    ordenar: 1,
    sidebar: false,
  };

  abreListaDeCompras = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  adicionarCarrinho = (id) => {
    const produtos = this.state.produtos;

    const produtoFiltradoParaAdicionarAoCarrinho = produtos.filter(
      (produto) => {
        if (produto.id === id) {
          return produto;
        }else{
          return produto
        }
      }
    );

    const [novoProdutoCarrinho] = produtoFiltradoParaAdicionarAoCarrinho;

    const jaExisteProdutoNoCarrinho = this.state.cart.find((produto) => {
      return produto.id === novoProdutoCarrinho.id;
    });

    if (jaExisteProdutoNoCarrinho) {
      const novoCarrinhoComQuantidadeAtualizada = this.state.cart.map(
        (produto) => {
          if (jaExisteProdutoNoCarrinho.id === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1,
            };
          } else {
            return produto;
          }
        }
      );

      this.setState({
        cart: [...novoCarrinhoComQuantidadeAtualizada],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, { ...novoProdutoCarrinho, quantidade: 1 }],
      });
    }
  };

  removerCarrinho = (id) => {
    const { cart } = this.state;

    const itemToRemove = cart.find((produto) => produto.id === id);

    let newCart = [];

    if (itemToRemove.quantidade > 1) {
      newCart = cart.map((produto) => {
        if (produto.quantidade > 1) {
          return { ...produto, quantidade: produto.quantidade - 1 };
        } else {
          return produto;
        }
      });
    } else {
      newCart = cart.filter((produto) => {
        return produto.id !== id;
      });
    }

    this.setState({
      cart: newCart,
    });
  };

  getTotalValue = () => {
    const { cart } = this.state;
    let totalValue = 0;

    cart.map((produto) => {
      return (totalValue = totalValue + produto.preco * produto.quantidade);
    });

    return totalValue.toFixed(2).replace(".", ",");
  };

  listaAtualizada = (ev) => {
    this.setState({ query: ev.target.value });
  };

  listaPrecoMinimo = (ev) => {
    this.setState({ precoMinimo: ev.target.value });
  };

  listaPrecoMaximo = (ev) => {
    this.setState({ precoMaximo: ev.target.value });
  };

  listaParametroNome = (ev) => {
    this.setState({ parametroNome: ev.target.value });
  };

  listaOrdenada = (ev) => {
    this.setState({ ordenar: ev.target.value });
  };

  render() {
 
    const usuarioComponentes = this.state.produtos
      .filter((produto) => {
        return produto.nome
          .toLowerCase()
          .includes(this.state.query.toLocaleLowerCase());
      })
      .filter((produto) => {
        return (
          this.state.precoMinimo === "" ||
          produto.preco >= this.state.precoMinimo
        );
      })
      .filter((produto) => {
        return (
          this.state.precoMaximo === "" ||
          produto.preco <= this.state.precoMaximo
        );
      })
      .sort((atualProduto, proximoProduto) => {
        switch (this.state.parametroNome) {
          case "nome":
            return (
              this.state.ordenar *
              atualProduto.nome.localeCompare(proximoProduto.nome)
            );
          default:
            return (
              this.state.ordenar * (atualProduto.preco - proximoProduto.preco)
            );
        }
      })

      .map((produto) => {
        

        return <CardProdutos
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          foto={produto.foto}
          botao={this.adicionarCarrinho}
        />
      })

    return (
      <div className="App">
        <ContainerHeader>
          <Header />

          <Carrinho
            cart={this.state.cart}
            removerDoCarrinho={this.removerCarrinho}
            abreLista={this.abreListaDeCompras}
            sideBar={this.state.sidebar}
            totalValue={this.getTotalValue()}
          />
        </ContainerHeader>
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

        <div className="containerProdutos">{usuarioComponentes}</div>

        <Footer />
      </div>
    );
  }
}
export default App;
