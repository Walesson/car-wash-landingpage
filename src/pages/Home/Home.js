import React from "react";
import { Header, Home as Initial } from "../../components";
// import { Dashboard, Drive } from "../../assets/icons";

export const Home = () => {
  return (
    <div>
      <Header />
      <Initial />
      {/* <Container>
        <InfoHome>
          <InfoLeft>
            <BigTitle bold>Seu Carro, Sempre Limpo, Sempre Pronto!</BigTitle>
            <SubTitle semibold>
              Transformamos a limpeza do seu carro em uma experiência única!
            </SubTitle>
          </InfoLeft>
          <InfoRight>
            <img src={Banner} />
          </InfoRight>
        </InfoHome>
      </Container> */}
    </div>
  );
};
