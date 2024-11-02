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

const ProfileImg = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background-color: var(--color-gray-300);
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-gray-500);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 33px;
    object-fit: cover;
  }
`;

const FileInput = styled.input`
  display: none;
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
`;

export { Form, FormTitle, ProfileImg, FileInput, Section, Input, SubmitBtn };
