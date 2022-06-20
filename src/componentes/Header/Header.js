import React from "react";
import styled from "styled-components";
import Logo from "../../img/LostinSpace.png";

const Container = styled.div`
  background: url("https://i.pinimg.com/originals/85/15/d5/8515d58fac0934d5ee88fc83d72de7af.jpg");
  color: #f2f2f2;
  padding: 10px;
  display: flex;
  align-items: center;
  line-height: 1.3;
  box-sizing: border-box;
`;

const ImagemLogo = styled.img`
  width: 20%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 40%;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <ImagemLogo src={Logo} />
      </Container>
    );
  }
}

export default Header;
