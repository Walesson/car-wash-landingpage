import styled from "styled-components";
import { Text } from "../../components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: tomato;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 1024px;
  height: 85vh;
  min-height: 340px;
  padding: 1em;
  margin: 0 auto;
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
`;
