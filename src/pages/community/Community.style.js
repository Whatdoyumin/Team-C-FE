import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { FaCommentDots } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`;

const SearchContainer = styled.div`
  position: relative;
  padding-bottom: 15px;
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
  top: 35%;
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
  flex-direction: column;
  padding: 8px 0;
  border-bottom: 1.5px solid #ddd;
  cursor: pointer;
  gap: 10px;

  h3 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 12px;
    color: #888;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CommentIcon = styled(FaCommentDots)`
  color: var(--color-blue-main);
  font-size: 15px;
`;

export {
  Container,
  SearchContainer,
  SearchIcon,
  BoardContainer,
  PostItem,
  CommentIcon,
};
