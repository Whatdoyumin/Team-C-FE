import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 190px);
  justify-content: center;
  position: relative;
  gap: 20px;
  transform: translateX(20px);
  width: 100%;
  margin-left: calc(-1 * var(--size-side-gap));
`;

const PolicyContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  width: 100%;
`;

export { Container, PolicyContainer };
