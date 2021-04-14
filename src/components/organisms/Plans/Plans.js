import React from "react";
import { CardPlan } from "../../molecules";
import { Container, TitlePage, Content } from "./styles";

export const Plans = () => {
  const listPlans = [
    {
      id: 1,
      title: "Mensal",
      value: 199.9,
      lg: false,
      listItems: [
        {
          id: "1",
          title: "Todas as funcionalidades",
        },
        {
          id: "2",
          title: "Até 2 usuários",
        },
      ],
    },
    {
      id: 2,
      title: "Semestral",
      value: 999.9,
      lg: true,
      listItems: [
        {
          id: "1",
          title: "Todas as funcionalidades",
        },
        {
          id: "2",
          title: "Usuários ilimitados",
        },
      ],
    },
    {
      id: 3,
      title: "Anual",
      value: 1799.9,
      lg: false,
      listItems: [
        {
          id: "1",
          title: "Todas as funcionalidades",
        },
        {
          id: "2",
          title: "Usuários ilimitados",
        },
      ],
    },
  ];
  return (
    <Container>
      <TitlePage>CONHEÇA NOSSOS PLANOS</TitlePage>
      <Content>
        {listPlans.map((item) => (
          <CardPlan
            key={item.id}
            title={item.title}
            price={item.value}
            lg={item.lg}
            items={item.listItems}
          />
        ))}
      </Content>
    </Container>
  );
};
