import styled from "styled-components";
import { Text } from "../../atoms";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  min-height: 78px;
  box-shadow: 0 2px 22px rgba(122, 122, 122, 0.2);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 85px;
`;

export const ListLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuLink = styled.li`
  display: inline;
  margin: 20px;
  cursor: pointer;
`;

export const MenuFont = styled(Text)`
  font-size: 1.6em;
`;

export const Entrar = styled.button`
  border: none;
  padding: 15px 48px;
  color: #fff;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;
