import styled from 'styled-components';

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;

  input {
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-gray-50);
    padding: 0 10px;
  }

  textarea {
    width: 100%;
    height: 400px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-gray-50);
    padding: 10px;
  }
`;

export { WriteContainer };
