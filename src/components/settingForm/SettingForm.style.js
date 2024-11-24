import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Form = styled.form`
  width: 100%;
  height: ${(props) =>
    props.full
      ? '100%'
      : 'calc(100vh - var(--size-navbar) - var(--size-header))'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0 6px;
  overflow-y: auto;
`;

const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-700);
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 12px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  background-color: var(--color-blue-700);
  color: white;
  font-size: 12px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  margin-bottom: 30px;

  &:disabled {
    background-color: var(--color-gray-400);
  }
`;

export { Container, Form, FormTitle, Section, SubmitBtn };
