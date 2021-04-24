import React from "react";
import LogoImg from "../../../assets/images/logo-v1.png";
import {
  Wrapper,
  Container,
  Right,
  MenuLink,
  Link,
  MenuFont,
  ListLinks,
  Logo,
} from "./sytles";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg} alt="Logo app" />
        <Right>
          <ListLinks>
            <MenuLink>
              <Link href="#howItWorks">
                <MenuFont semibold>Como funciona</MenuFont>
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href="#plans">
                <MenuFont semibold>Planos</MenuFont>
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href="#aboutUs">
                <MenuFont semibold>Quem Somos</MenuFont>
              </Link>
            </MenuLink>
            <MenuLink>
              <MenuFont semibold>Acessar</MenuFont>
            </MenuLink>
            <MenuLink>
              <MenuFont semibold>Cadastre-se</MenuFont>
            </MenuLink>
          </ListLinks>
        </Right>
      </Container>
    </Wrapper>
  );
};
