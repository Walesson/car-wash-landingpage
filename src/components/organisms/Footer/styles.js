import styled from "styled-components";
import {
  Instagram as UnstyledInstagram,
  Linkedin as UnstyledLinkedin,
  Facebook as UnstyledFacebook,
} from "../../../assets/icons";
import { Container as UnstyledContainer } from "../Container";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  padding: 36px 0;
`;

export const Container = styled(UnstyledContainer)`
  min-height: 20em;
  flex-wrap: wrap;
`;

export const Content = styled(UnstyledContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ContentLogo = styled.div`
  width: 200px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const IconsNetwork = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-width: 122px;
  margin-top: 15px;
`;

export const Instagram = styled(UnstyledInstagram)``;

export const Linkedin = styled(UnstyledLinkedin)``;

export const Facebook = styled(UnstyledFacebook)``;

export const ContentLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 60%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 189px;
`;

export const ListTitle = styled.li`
  font-weight: bold;
  font-size: 2.4em;
  line-height: 28px;
  margin-bottom: 13px;
`;

export const ListSubTitle = styled(ListTitle)`
  text-transform: uppercase;
  font-size: 15px;
`;

export const ListItem = styled.li`
  font-size: 1.4em;
  line-height: 16px;
  margin-bottom: 1em;
`;
