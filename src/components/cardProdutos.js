import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
    display: grid;
    justify-items: center;
    width: 25vw;
    height: 40vh;
    padding:20px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
      justify-content: center
    }
`

const Imagem = styled.img`
  width: 50%; 
`
const BotaoAdc = styled.button`
  color:white;
  border-radius: 24px;
  background: #1b3e50;
  box-shadow:  -3px -1px 40px #2a617e;
  border: none;
  width: 150px;
  height: 30px;
  &:hover{
    transform: scale(1.1);
    box-shadow:  10px -1px 60px #168fd0;
  };
`

class CardProdutos extends React.Component {
 
  render() {

      return(
        <ContainerCard>
          <Imagem src={this.props.foto} alt="" />
          <div>
            <p>{this.props.nome}</p>
            <p>R${this.props.preco},00</p>
            <BotaoAdc>Adicionar ao carrinho</BotaoAdc>
          </div>
      </ContainerCard>
    );
  }
}
export default CardProdutos