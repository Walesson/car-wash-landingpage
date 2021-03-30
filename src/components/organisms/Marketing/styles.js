import styled from "styled-components";
import { Text } from "../../atoms";
import { Container as UnstyledContainer } from "../Container";

export const Container = styled(UnstyledContainer)`
  min-height: 45vh;
`;

export const BigTitle = styled(Text)`
  display: flex;
  font-size: 6.2em;
  line-height: 75px;
  max-width: 358px;
  color: ${({ theme }) => theme.colors.secondary.main};
`;

export const InfoHome = styled.div`
  display: flex;
  margin-top: 6.1em;
`;

export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InfoRight = styled.div`
  width: 50%;
  position: relative;
  border-radius: 0 2.5em 2.5em 0;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 22;
  background: linear-gradient(to right, #fff, 50%, rgba(255, 255, 255, 0.1));
`;
