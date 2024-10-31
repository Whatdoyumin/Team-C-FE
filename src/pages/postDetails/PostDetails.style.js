import styled from 'styled-components';
import { FaCommentDots } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 190px);
  margin: 0 auto;
  padding: 10px;
  overflow-y: auto;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #61646b;
    margin-right: 7px;
  }

  p {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  h6 {
    font-size: 11px;
    color: #61646b;
  }
`;

const PostContent = styled.div`
  margin-bottom: 7px;
  h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    line-height: 1.6;
    color: #61646b;
    text-align: justify;
  }
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--color-blue-main);
`;

const CommentIcon = styled(FaCommentDots)`
  font-size: 15px;
  margin-right: 3px;
`;

const Divider = styled.hr`
  margin: 15px 0;
  background: #c5c5c5;
  height: 1px;
  border: 0;
`;

const CommentList = styled.div`
  margin-top: 10px;
  height: 280px;
  overflow-y: scroll;
`;

const CommentBox = styled.div`
  display: flex;
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #61646b;
    margin-right: 8px;
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 900;
  }

  p {
    margin-top: 12px;
    font-size: 12px;
    color: #61646b;
  }
`;

const CommentInputBox = styled.div`
  display: flex;
  margin: 10px 0;
  position: fixed;
  left: 50%;
  bottom: 13.5%;
  transform: translate(-50%, 50%);
`;

const CommentInput = styled.div`
  position: relative;

  input {
    width: 350px;
    height: 40px;
    padding: 0 15px;
    border: none;
    border-radius: 20px;
    background-color: #f1f1f1;
    font-size: 13px;

    &:focus {
      border: 1px solid #888;
      outline: none;
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;
    color: #84858c;
  }
`;

export {
  Container,
  AuthorInfo,
  PostContent,
  CommentCount,
  CommentIcon,
  Divider,
  CommentList,
  CommentInputBox,
  CommentInput,
  CommentBox,
  Comment,
};
