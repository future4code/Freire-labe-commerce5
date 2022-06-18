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
  top: 110px;
  width: 300px;
  height: 400px;
  background-color: #000000aa;
  border-radius: 8px;
  @media (max-width: 1200px) {
    right: 0px;
  };
`;

const ItenSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

class Carrinho extends React.Component {
  

  render() {
    return (
      <div>
        <BotaoCarrinho onClick={this.props.abreLista}>
          <IconeCarrinho src={iconeCarrinho} alt="Icone do Carrinho" />
          <h3>Carrinho {this.props.quantidade}</h3>
        </BotaoCarrinho>
        <SideBar tipo={this.props.sideBar}>
          {this.props.quantidade > 0 ? (
            <ItenSidebar>
              <p>{this.props.quantidade}x</p>
              <p>{this.props.nomeDoProduto}</p>
              <button onClick={this.props.removerDoCarrinho}>Remover do Carrinho</button>
            </ItenSidebar>
          ) : (
            ""
          )}
        </SideBar>
      </div>
    );
  }
}

export default Carrinho;
