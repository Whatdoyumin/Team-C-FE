import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 0 12px;
`;

const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-700);
`;

const ProfileImg = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background-color: var(--color-gray-300);
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

export { Form, FormTitle, ProfileImg, Section, Input };
