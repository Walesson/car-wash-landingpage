import React from "react";
import { ItemCard } from "../ItemCard";
import { Button } from "../../atoms";
import { Wrapper, Title, Price, Info, WrapperButton } from "./styles";

export const CardPlan = ({ title, lg = false, price, items = [] }) => {
  return (
    <Wrapper lg={lg}>
      <Info>
        <Title>{title}</Title>
        <Price>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </Info>
      {items.map((item) => (
        <ItemCard key={item.id} title={item.title} />
      ))}
      <WrapperButton lg={lg}>
        <Button label="Escolher Plano" />
      </WrapperButton>
    </Wrapper>
  );
};
