import styled from 'styled-components';

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
  width: 300px;

  h6 {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 900;
  }

  p {
    margin-top: 13px;
    padding-right: 3px;
    font-size: 12px;
    color: var(--color-gray-800);
  }
`;

const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { CommentList, CommentBox, Comment, EditBox };
