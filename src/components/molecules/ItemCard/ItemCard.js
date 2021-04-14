import React from "react";
import { Wrapper, Label, Icon } from "./styles";

export const ItemCard = ({ title }) => {
  return (
    <Wrapper>
      <Icon />
      <Label>{title}</Label>
    </Wrapper>
  );
};
