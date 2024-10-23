import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  max-width: var(--size-max-width);
  width: 100%;
  height: var(--size-header);
  overflow: hidden;
  position: fixed;
  top: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: var(--color-blue-main);
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

export { Header, Logo };
