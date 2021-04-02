import styled from "styled-components";
import { TitlePage as UnstyledTitlePage } from "../../atoms";
import { Container as UnstyledContainer } from "../Container";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
`;

export const Container = styled(UnstyledContainer)`
  min-height: 20em;
`;

export const TitlePage = styled(UnstyledTitlePage)`
  margin-bottom: 2.7em;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12em;
`;
