import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 156px;
  background: linear-gradient(
    to bottom right,
    rgba(244, 244, 244, 0.1),
    rgba(116, 215, 216, 0.1),
    rgba(88, 139, 226, 0.05)
  );
  border-radius: 20px;
  align-items: center;
`;

const Texts = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
`;

const Title = styled.div`
  display: flex;
  font-size: 26px;
  color: #588be2;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  font-size: 15px;
  word-break: keep-all;
  font-weight: semi-bold;
`;

const Img = styled.div`
  display: flex;
  width: 123px;
  height: 123px;
`;
export { Container, Texts, Title, Content, Img };
