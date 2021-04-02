import React from "react";
import { CardInfo } from "../../molecules";
import { Container, TitlePage, Content } from "./styles";

export const Benefits = () => {
  return (
    <Container>
      <TitlePage>OS MELHORES BENEFÍCIOS</TitlePage>
      <Content>
        <CardInfo
          title="Controle de Atendimento"
          icon="plus-circle"
          desc="Automatize a entrada e saída de veículos da sua empresa."
        />
      </Content>
    </Container>
  );
};
