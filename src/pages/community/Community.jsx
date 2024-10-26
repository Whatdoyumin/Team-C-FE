import * as S from './Community.style';
import { IoChevronForward } from 'react-icons/io5';

function Community() {
  return (
    <S.Container>
      <S.Header>
        <h2>커뮤니티</h2>
        <img
          src="https://plus.unsplash.com/premium_vector-1729148891474-f360f086cdb1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
          alt="프로필"
        />
      </S.Header>
      <S.SearchContainer>
        <input type="text" />
        <S.SearchIcon />
      </S.SearchContainer>
      <S.BoardContainer>
        <h2>
          인기 게시글
          <IoChevronForward />
        </h2>
        <S.PostItem>
          <img
            src="https://plus.unsplash.com/premium_vector-1729148891474-f360f086cdb1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
            alt="프로필"
          />
          <S.PostContent>
            <h4>웨이</h4>
            <p>오후 11시 00분</p>
            <h3>게시글 제목제목</h3>
            <span>게시글 내용내용</span>
          </S.PostContent>
        </S.PostItem>
        <S.PostItem>
          <img
            src="https://plus.unsplash.com/premium_vector-1729148891474-f360f086cdb1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
            alt="프로필"
          />
          <S.PostContent>
            <h4>웨이</h4>
            <p>오후 11시 00분</p>
            <h3>게시글 제목제목</h3>
            <span>게시글 내용내용</span>
          </S.PostContent>
        </S.PostItem>
      </S.BoardContainer>
      <S.BoardContainer>
        <h2>
          자유 게시판
          <IoChevronForward />
        </h2>
        <S.PostItem>
          <img
            src="https://plus.unsplash.com/premium_vector-1729148891474-f360f086cdb1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
            alt="프로필"
          />
          <S.PostContent>
            <h4>웨이</h4>
            <p>오후 11시 00분</p>
            <h3>게시글 제목제목</h3>
            <span>게시글 내용내용</span>
          </S.PostContent>
        </S.PostItem>
        <S.PostItem>
          <img
            src="https://plus.unsplash.com/premium_vector-1729148891474-f360f086cdb1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
            alt="프로필"
          />
          <S.PostContent>
            <h4>웨이</h4>
            <p>오후 11시 00분</p>
            <h3>게시글 제목제목</h3>
            <span>게시글 내용내용</span>
          </S.PostContent>
        </S.PostItem>
      </S.BoardContainer>
    </S.Container>
  );
}

export default Community;
