import styled from "styled-components";
import { TitlePage as UnstyledTitlePage } from "../../atoms";
import { Container as UnstyledContainer } from "../Container";

export const Container = styled(UnstyledContainer)`
  min-height: 45vh;
  margin-bottom: 25em;
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
