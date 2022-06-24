import React from "react";
import styled from "styled-components";
import iconeCarrinho from "../../img/icone-carrinho.png";
import lixeira from "../../img/produtos/lixeira.svg";

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
  top: 110px;
  right:5px;
  width: 300px;
  height: 400px;
  background-color: #000000aa;
  border-radius: 8px;
  @media (max-width: 1200px) {
    right: 5px;
  } ;
`;

const ItenSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const BotaoRemover = styled.button`
  width: 20px;
  background: url(${lixeira});
  border: none;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <BotaoCarrinho onClick={this.props.abreLista}>
          <IconeCarrinho src={iconeCarrinho} alt="Icone do Carrinho" />
          <h3>Carrinho {this.props.cart.length}</h3>
        </BotaoCarrinho>
        <SideBar tipo={this.props.sideBar}>
          {this.props.cart.map((produto) => {
            return (
              <ItenSidebar key={this.props.id}>
                <p>{produto.quantidade}x</p>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <BotaoRemover
                  onClick={() => this.props.removerDoCarrinho(produto.id)}
                ></BotaoRemover>
              </ItenSidebar>
            );
          })}

          <div>
            <hr />
            <p>Valor total: R${this.props.totalValue}</p>
          </div>
        </SideBar>
      </div>
    );
  }
}

export default Carrinho;
