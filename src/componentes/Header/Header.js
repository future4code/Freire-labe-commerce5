import React from "react";
import styled from "styled-components";
import iconeCarrinho from "../../img/icone-carrinho.png";

const Container = styled.div`
  background: url("https://i.pinimg.com/originals/85/15/d5/8515d58fac0934d5ee88fc83d72de7af.jpg");
  color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.3;
`;

const IconeCarrinho = styled.img`
  width: 80px;
`;

const BotaoCarrinho = styled.button`
  background-color: #ffffff00;
  border: none;
  color: #ffffff;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <h1>NomeLoja</h1>
        <BotaoCarrinho>
          <IconeCarrinho src={iconeCarrinho} alt="Icone do Carrinho" />
          <p>Carrinho</p>
        </BotaoCarrinho>
      </Container>
    );
  }
}

export default Header;
