import React from "react";
import LogoNegative from "../../../assets/images/logo-negative.png";
import {
  Wrapper,
  Container,
  Content,
  ContentLogo,
  Logo,
  IconsNetwork,
  Instagram,
  Facebook,
  Linkedin,
  ContentLinks,
  List,
  ListItem,
  ListTitle,
  ListSubTitle,
} from "./styles";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <ContentLogo>
            <Logo src={LogoNegative} />
            <IconsNetwork>
              <Instagram />
              <Facebook />
              <Linkedin />
            </IconsNetwork>
          </ContentLogo>
          <ContentLinks>
            <List>
              <ListTitle>Contato</ListTitle>
              <ListItem>(85) 3387-6514</ListItem>
              <ListItem>(85) 9.9815-6547</ListItem>
            </List>
            <List>
              <ListTitle>Recursos</ListTitle>
              <ListItem>Suporte</ListItem>
              <ListItem>FAC</ListItem>
              <ListItem>API & Developers</ListItem>
              <ListItem>Informações</ListItem>
            </List>
            <List>
              <ListTitle>Endereço</ListTitle>
              <ListSubTitle>São Paulo</ListSubTitle>
              <ListItem>
                Alameda Vicente Pinzon, 54, 12º andar, Vila Olímpia, CEP
                04547-130, SP
              </ListItem>
            </List>
          </ContentLinks>
        </Content>
      </Container>
    </Wrapper>
  );
};
