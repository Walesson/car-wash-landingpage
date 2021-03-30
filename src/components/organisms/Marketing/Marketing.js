import React from "react";
import Banner from "../../../assets/images/car-wash-detailing-station.jpg";
import { TitlePage } from "../../atoms";
import {
  Container,
  InfoHome,
  InfoLeft,
  InfoRight,
  BigTitle,
  Overlay,
} from "./styles";

export const Marketing = () => (
  <Container>
    <TitlePage>SEU VEÍCULO IMPORTA PARA NÓS</TitlePage>
    <InfoHome>
      <InfoLeft>
        <BigTitle bold>CarWash, seu veículo, sempre em boas mãos!</BigTitle>
      </InfoLeft>
      <InfoRight>
        <Overlay />
        <img src={Banner} alt="banner" />
      </InfoRight>
    </InfoHome>
  </Container>
);
