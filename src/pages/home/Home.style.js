import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 190px);
  align-items: center;
  position: relative;
  gap: 20px;
  transform: translateX(20px);
  max-width: 100%;
  margin-left: calc(-1 * var(--size-side-gap));
`;

const PolicyContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  width: 345px;
`;

const Title = styled.div`
  font-size: 22px;
  height: 25px;
  position: sticky;
  top: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.7)
  );
  backdrop-filter: blur(4px);
  color: #53565d;
  font-weight: bold;
  z-index: 3;
  margin-bottom: 10px;
`;

export { Container, PolicyContainer, Title };
