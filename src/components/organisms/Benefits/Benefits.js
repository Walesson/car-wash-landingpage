import React from "react";
import { CardInfo } from "../../molecules";
import { Button } from "../../atoms";
import { Container, TitlePage, Content } from "./styles";

export const Benefits = () => {
  return (
    <Container>
      <TitlePage>OS MELHORES BENEFÍCIOS</TitlePage>
      <Content>
        <CardInfo
          title="Controle de Atendimento"
          iconName="plus-circle"
          desc="Automatize a entrada e saída de veículos da sua empresa."
        />
        <CardInfo
          title="Clientes encontrados"
          iconName="persons"
          desc="Automatize a entrada e saída de veículos da sua empresa."
        />
        <CardInfo
          title="Melhores Avaliados"
          iconName="star"
          desc="Na plataforma será destacado somentes as melhores empresas avaliadas."
        />
      </Content>
      <Button label="Use CarWash na sua empresa" primary />
    </Container>
  );
};
