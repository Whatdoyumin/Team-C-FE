import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 0 6px 0 12px;
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

const Input = styled.input`
  color: var(--color-gray-700);
  height: 20px;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid var(--color-gray-200);
  padding: 0 5px 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  background-color: var(--color-blue-700);
  color: white;
  font-size: 12px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  margin-bottom: 24px;

  &:disabled {
    background-color: var(--color-gray-400);
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

export { Form, FormTitle, Section, Input, ErrorMsg, SubmitBtn };
