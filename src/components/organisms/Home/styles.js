import styled from "styled-components";
import { Text } from "../../atoms";
import { Container as UnstyledContainer } from "../Container";

export const Container = styled(UnstyledContainer)`
  height: 85vh;
`;

export const BigTitle = styled(Text)`
  display: flex;
  font-size: 6.2em;
  line-height: 75px;
`;

export const InfoHome = styled.div`
  display: flex;
`;

export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InfoRight = styled.div`
  width: 50%;

  & > img {
    width: 100%;
  }
`;

export const SubTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary.main};
  font-size: 2em;
  line-height: 1.4em;
  margin-top: 1em;
`;

export const PlayStore = styled.a`
  margin-top: 3.4em;
  width: 21.4em;
  & > img {
    width: 100%;
  }
`;
