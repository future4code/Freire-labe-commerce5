import React from "react";
import styled from "styled-components";

const Fundo = styled.div`
  background-color: blue;
  height: 91.46vh;
  padding-top: 80px;
`;
const Container = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  text-align: center;
  border: 2px solid #00ffcc;
  border-radius: 8px;
  max-width: 80%;
  background-image: url("https://img.elo7.com.br/product/600x380/37582DB/papel-de-parede-adesivo-espaco-sideral-preto-quarto-gamer-adesivo-decorativo.jpg");
  color: #d1d1d1;
`;
const ItemNoCarrinho = styled.div`
  background-color: green;
  box-sizing: border-box;
  max-width: 80%;
  margin: 5px auto;
  border: 2px solid #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;
const Produto = styled.div`
  display: flex;
  gap: 10px;
`

class Carrinho extends React.Component {

  render() {
    return (
      <Fundo>
        <Container>
          <h1>Carrinho</h1>
          <ItemNoCarrinho>
            <Produto>
              <h3>teste</h3>
              <h3>Recebe uma porps com nome</h3>
            </Produto>
            <h3>Props com preço</h3>
          </ItemNoCarrinho>
        </Container>
      </Fundo>
    );
  }
}

export default Carrinho;
