import * as S from './Community.style';
import { BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import PostList from '../../components/postList/PostList';

function Community() {
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    navigate('/postwrite');
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <input type="text" />
        <S.SearchIcon />
      </S.SearchContainer>
      <PostList />
      <S.WriteButton>
        <button onClick={handleWriteButtonClick}>
          <BsPencil />
          글쓰기
        </button>
      </S.WriteButton>
    </S.Container>
  );
}

export default Community;
