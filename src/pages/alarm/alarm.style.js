import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--size-inner-max-width);
  min-width: var(--size-min-width);
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

const Explain = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  color: var(--color-gray-600);
`;
const Ref = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export { Container, Explain, Ref };
