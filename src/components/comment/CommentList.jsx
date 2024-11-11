import * as S from '../../pages/postDetails/PostDetails.style';

function CommentList({ comments }) {
  return (
    <S.CommentList>
      {comments.map((comment, index) => (
        <S.CommentBox key={index}>
          <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
          <S.Comment>
            <h6>유니</h6>
            <p>{comment}</p>
          </S.Comment>
        </S.CommentBox>
      ))}
    </S.CommentList>
  );
}

export default CommentList;
