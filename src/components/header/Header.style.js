import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  max-width: var(--size-max-width);
  width: 100%;
  height: var(--size-header);
  overflow: hidden;
  position: fixed;
  top: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0 var(--size-side-gap);
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-300);
  position: relative;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-gray-700);
  }
`;

const Profile = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: var(--color-gray-400);
`;

const Logo = styled(Link)`
  font-size: 28px;
  color: var(--color-blue-700);
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  margin-left: calc(
    (var(--size-max-width) - var(--size-logo)) / 2 - var(--size-side-gap)
  );
`;

export { Header, Nav, Logo, Profile };
