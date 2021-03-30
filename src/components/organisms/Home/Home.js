import React from "react";
import Banner from "../../../assets/images/banner.jpg";
import playstore from "../../../assets/images/disponivel-google-play-badge-1.png";
import {
  Container,
  InfoHome,
  InfoLeft,
  InfoRight,
  BigTitle,
  SubTitle,
  PlayStore,
} from "./styles";

export const Home = () => (
  <Container>
    <InfoHome>
      <InfoLeft>
        <BigTitle bold>Seu Carro, Sempre Limpo, Sempre Pronto!</BigTitle>
        <SubTitle semibold>
          Transformamos a limpeza do seu carro em uma experiência única!
        </SubTitle>
        <PlayStore
          href="https://play.google.com/store?hl=pt_BR&gl=US"
          target="_blank"
        >
          <img src={playstore} alt="Playstore" />
        </PlayStore>
      </InfoLeft>
      <InfoRight>
        <img src={Banner} alt="banner" />
      </InfoRight>
    </InfoHome>
  </Container>
);
