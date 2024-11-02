import * as S from './Community.style';
import { BsPencil } from 'react-icons/bs';

import PostList from '../../components/postList/PostList';

function Community() {
  return (
    <S.Container>
      <S.SearchContainer>
        <input type="text" />
        <S.SearchIcon />
      </S.SearchContainer>
      <PostList />
      <S.WriteButton>
        <button>
          <BsPencil />
          글쓰기
        </button>
      </S.WriteButton>
    </S.Container>
  );
}

export default Community;
