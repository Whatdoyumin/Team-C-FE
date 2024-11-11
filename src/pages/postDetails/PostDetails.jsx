import { useParams } from 'react-router-dom';
import * as S from './PostDetails.style';
import { useState } from 'react';
import { LuSendHorizonal } from 'react-icons/lu';
import { usePost } from '../../context/PostContext';
import CommentList from '../../components/comment/CommentList';
import CommentInput from '../../components/comment/CommentInput';

function PostDetails() {
  const { postId } = useParams();
  const { posts } = usePost();
  const post = posts.find((post) => post.id === parseInt(postId));
  // console.log(postId);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentCount, setCommmetCount] = useState(post?.commentCount || 0);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments((comments) => [...comments, newComment]);
      setCommmetCount((count) => count + 1);
      setNewComment('');
    }
  };

  return (
    <S.Container>
      <S.AuthorInfo>
        <img src={'https://bit.ly/4fhflX4'} alt={'사진'} />
        <div>
          <p>{post.authorName}</p>
          <h6>{post.time}</h6>
        </div>
      </S.AuthorInfo>
      <S.PostContent>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </S.PostContent>
      <S.CommentCount>
        <S.CommentIcon />
        {commentCount}
      </S.CommentCount>
      <S.Divider />

      <CommentList comments={comments} />

      <form onSubmit={handleAddComment}>
        <CommentInput
          newComment={newComment}
          setNewComment={setNewComment}
          handleAddComment={handleAddComment}
        />
      </form>
    </S.Container>
  );
}

export default PostDetails;
