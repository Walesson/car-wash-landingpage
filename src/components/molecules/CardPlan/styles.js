import styled from "styled-components";
import { H5, H3 } from "../../atoms";

export const Wrapper = styled.div`
  min-width: 22.8em;
  padding: ${({ lg }) => (lg ? "5.6em 3.9em" : "3.6em 1.9em")};
  border: 2px solid #efefef;
  box-sizing: border-box;
  border-radius: 25px;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(H5)`
  display: block;
  text-transform: uppercase;
`;

export const Price = styled(H3)`
  display: block;
`;

export const WrapperButton = styled.div`
  margin-top: ${({ lg }) => (lg ? "6em" : "3em")};
`;
