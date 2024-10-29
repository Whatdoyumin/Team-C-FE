import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #f3f3f3;
  width: 345px;
  flex-direction: column;
  border-radius: 13px;
`;

const Date = styled.div`
  height: 34px;
  width: 71px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 22px;
  margin: 13px;
  color: #53565d;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px;
  gap: 10px;
`;

export { Container, Date, Contents };
