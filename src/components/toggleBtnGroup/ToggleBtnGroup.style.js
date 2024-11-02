import { styled } from 'styled-components';

const Ul = styled.ul`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const Li = styled.li`
  list-style-type: none;
`;

const ToggleBtn = styled.input`
  padding: 10px 12px;
  border: none;
  background-color: ${(props) =>
    props.$isSelected ? 'var(--color-blue-700)' : 'var(--color-gray-100)'};
  color: ${(props) => (props.$isSelected ? 'white' : 'var(--color-gray-600)')};
  font-size: 12px;
  border-radius: 20px;
  white-space: nowrap;
`;
export { Ul, Li, ToggleBtn };
