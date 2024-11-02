import * as S from './postWrite.style';

const postWrite = () => {
  return (
    <S.WriteContainer>
      <input type="text" id="title" placeholder="제목" />
      <textarea id="content" placeholder="내용을 입력하세요" />
    </S.WriteContainer>
  );
};

export default postWrite;
