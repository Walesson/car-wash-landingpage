import React from "react";
import { Dashboard, Drive } from "../../../assets/icons";
import {
  Container,
  TitlePage,
  DescContent,
  Desc,
  DescInfo,
  Title,
  Info,
  Banner,
} from "./styles";

export const AboutUs = () => (
  <Container>
    <TitlePage>QUEM SOMOS</TitlePage>
    <DescContent>
      <Info>
        <Banner></Banner>
        <Desc>
          <DescInfo>
          <strong>Somos</strong> uma empresa referência em oferecer agilidade e comodidade
          ao listar parceiros que ofertam serviços de lavagem e estética de
          automotores, sempre em busca do pioneirismo e da vanguarda, se
          tratando de lavagem, aliando praticidade com custo e benefício.
          </DescInfo>
        </Desc>
      </Info>
    </DescContent>
  </Container>
);
