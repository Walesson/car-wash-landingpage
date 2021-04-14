import styled from "styled-components";
import { Text } from "../../atoms";
import { CheckCircle } from "@styled-icons/feather";

export const Wrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.text.subtle};
  font-size: 1.4em;
`;

export const Icon = styled(CheckCircle)`
  width: 1.2em;
  color: ${({ theme }) => theme.colors.success.main};
  font-weight: bold;
  margin-right: 0.8em;
`;
