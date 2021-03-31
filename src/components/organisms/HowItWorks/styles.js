import styled from "styled-components";
import { H2, Text, TitlePage as UnstyledTitlePage } from "../../atoms";
import { Container as UnstyledContainer } from "../Container";

export const Container = styled(UnstyledContainer)`
  min-height: 45vh;
  margin-bottom: 25em;
`;

export const TitlePage = styled(UnstyledTitlePage)`
  margin-bottom: 2.7em;
`;

export const Title = styled(H2)`
  color: ${({ theme }) => theme.colors.secondary.main};
  text-transform: uppercase;
`;

export const DescContent = styled.div`
  width: 100%;
  margin-bottom: 18.5em;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Banner = styled.div`
  width: 42.3em;
`;

export const Desc = styled.div`
  max-width: 50em;
`;

export const DescInfo = styled(Text)`
  color: ${({ theme }) => theme.colors.text.subtle};
`;
