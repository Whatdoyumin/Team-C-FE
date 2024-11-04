import styled from 'styled-components';

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

export { ProfileImg, FileInput };
