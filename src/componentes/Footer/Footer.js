import React from "react";
import styled from "styled-components";
import Insta from "../../img/insta.png"
import Face from "../../img/facebook.png"
import Twitter from "../../img/twitter.png"

const ContainerFooter = styled.div`
  background: black;
  color: #f2f2f2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 1.3;
  box-sizing: border-box;
  height: 20vh;
`

const RedesSociais = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 40px; 
`

class Footer extends React.Component {
    render() {
      return (
        
        <ContainerFooter>
            <RedesSociais>
                <img src={Insta} alt="icone instagram"/>
                <img src={Face} alt="icone facebook"/>
                <img src={Twitter} alt="icone twitter"/>
            </RedesSociais>
          <h5>© 2022 - NossaLoja Co.® Inc. Todos os direitos reservados.</h5>
        </ContainerFooter>
      );
    }
  }
  
  export default Footer;