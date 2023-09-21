import styled from 'styled-components/macro';

export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li.navbar__item div {
    cursor: pointer;
    margin: 6px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;
