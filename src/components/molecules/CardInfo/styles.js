import styled from "styled-components";
import {
  PlusCircle as UnstyledPlusCircle,
  Start as UnstyledStart,
  Persons as UnstyledPersons,
} from "../../../assets/icons";
import { Text } from "../../atoms";

export const Wrapper = styled.div`
  width: 23.5em;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 700;
  font-size: 2em;
  line-height: 1.1em;
  margin-left: 1em;
`;

export const Desc = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text.subtle};
  font-size: 1.7em;
  line-height: 32px;
  margin-top: 2em;
`;

export const PlusCircle = styled(UnstyledPlusCircle)`
  width: 3.2em;
`;

export const Start = styled(UnstyledStart)``;

export const Persons = styled(UnstyledPersons)``;
