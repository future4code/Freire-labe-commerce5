import React from "react";
import styled from "styled-components";
import Carrinho from "../Carrinho/Carrinho";

const Container = styled.div`
  background: url("https://i.pinimg.com/originals/85/15/d5/8515d58fac0934d5ee88fc83d72de7af.jpg");
  color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 1.3;
  box-sizing: border-box;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <h1>NomeLoja</h1>
        <Carrinho />
      </Container>
    );
  }
}

export default Header;
