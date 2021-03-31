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

export const HowItWorks = () => (
  <Container>
    <TitlePage>COMO FUNCIONA</TitlePage>
    <DescContent>
      <Title>Para você</Title>
      <Info>
        <Banner>
          <Drive />
        </Banner>
        <Desc>
          <DescInfo>
            Através do nosso <strong>aplicativo</strong> encontre as melhores e
            mais bem classificadas empresas de limpeza automotivas da sua
            região. De qualquer lugar e há qualquer hora é possível realizar o
            agendamento para a limpeza do seu veículo. Localize as empresas mais
            próximas de você, veja as avaliações de outros usuários e consulte o
            histório de limpeza do seu veículo em um só lugar! tudo isso{" "}
            <strong>GRATUITO!</strong>
          </DescInfo>
        </Desc>
      </Info>
    </DescContent>
    <DescContent>
      <Title right>Para sua empresa</Title>
      <Info>
        <Desc>
          <DescInfo>
            Profissionalize o seu negócio e passe atender em alta escala, com
            uma plataforma pronta para atender o seu nincho! Ofereça mas
            agilidade aos seus clientes, tenha em mãos o faturamento de entrada
            de cada veículo. Automatize agora mesmo o controle de produção da
            sua empresa de limpeza de veículos!
          </DescInfo>
        </Desc>
        <Banner>
          <Dashboard />
        </Banner>
      </Info>
    </DescContent>
  </Container>
);
