import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 150px;
  border-radius: 20px;
  background-color: #53565d;
  background-image: radial-gradient(
    circle at top right,
    rgba(226, 161, 88, 0.1),
    rgba(226, 88, 88, 0.1),
    rgba(149, 181, 237, 0.1),
    rgba(83, 86, 93, 1)
  );
  background-origin: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  margin-left: 20px;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  font-size: 15px;
  color: #ffffff;
  word-break: keep-all;
  font-weight: semi-bold;
`;

const Img = styled.img`
  display: flex;
  width: 104px;
  object-fit: cover;
`;

export { Container, Texts, Title, Content, Img };
