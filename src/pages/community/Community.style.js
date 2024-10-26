import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 27px;
    color: #888;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 8px 13px;
    background-color: #eee;
    border: none;
    border-radius: 25px;
    outline: none;

    &:focus {
      border: 1.5px solid #aaa;
    }
  }
`;

const SearchIcon = styled(IoSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 20px;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;

  h2 {
    border-bottom: 1.5px solid #ddd;
    padding-bottom: 10px;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
  }
`;

const PostItem = styled.div`
  display: flex;
  padding: 0 10px 10px;
  border-bottom: 1.5px solid #ddd;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 13px;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    border: none;
    padding-bottom: 3px;
  }

  p {
    font-size: 10px;
    padding-bottom: 3px;
    color: #aaa;
  }

  h3 {
    font-size: 17px;
    padding: 5px 0;
  }

  span {
    font-size: 12px;
  }
`;

export {
  Container,
  Header,
  SearchContainer,
  SearchIcon,
  BoardContainer,
  PostItem,
  PostContent,
};
