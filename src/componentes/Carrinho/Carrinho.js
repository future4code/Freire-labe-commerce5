import React from "react";
import styled from "styled-components";
import iconeCarrinho from "../../img/icone-carrinho.png";

const IconeCarrinho = styled.img`
  width: 80px;
`;

const BotaoCarrinho = styled.button`
  background-color: #ffffff00;
  border: none;
  color: #ffffff;
  font-weight: bold;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const SideBar = styled.div`
  display: ${(props) => {
    if (props.tipo === true) {
      return "block";
    } else if (props.tipo === false) {
      return "none";
    }
  }};
  position: absolute;
  top: 100px;
`;

class Carrinho extends React.Component {
  state = {
    quantidade: 1,
    sidebar: false,
  };

  adicionarCarrinho = () => {
    this.setState({ quantidade: this.state.quantidade + 1 });
  };

  removerCarrinho = () => {
    this.setState({ quantidade: this.state.quantidade - 1 });
  };

  abreListaDeCompras = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  render() {
    return (
      <div>
        <BotaoCarrinho onClick={this.abreListaDeCompras}>
          <IconeCarrinho src={iconeCarrinho} alt="Icone do Carrinho" />
          <h3>Carrinho</h3>
        </BotaoCarrinho>
        <SideBar tipo={this.state.sidebar}>
          {this.state.quantidade > 0 ? (
            <button onClick={this.removerCarrinho}>Remover do Carrinho</button>
          ) : (
            ""
          )}
        </SideBar>
      </div>
    );
  }
}

export default Carrinho;
