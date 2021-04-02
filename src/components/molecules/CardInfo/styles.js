import styled from "styled-components";
import {
  PlusCircle as UnstyledPlusCircle,
  Start as UnstyledStart,
  Persons as UnstyledPersons,
} from "../../../assets/icons";
import { Text } from "../../atoms";

export const Wrapper = styled.div`
  width: 23.5em;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 700;
  font-size: 2em;
  line-height: 2.3em;
`;

export const PlusCircle = styled(UnstyledPlusCircle)``;

export const Start = styled(UnstyledStart)``;

export const Persons = styled(UnstyledPersons)``;
