import React from "react";
import { Wrapper, Header, Title, PlusCircle, Persons, Start } from "./styles";

export const CardInfo = ({ title, iconName, desc }) => (
  <Wrapper>
    <Header>
      {iconName === "plus-circle" && <PlusCircle />}
      {iconName === "persons" && <Persons />}
      {iconName === "star" && <Start />}
      <Title>{title}</Title>
    </Header>
  </Wrapper>
);
