import { useState } from 'react';
import * as S from './policyDetails.style';
function PolicyDetails() {
  const [isClicked, setIsClicked] = useState(false);
  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Container>
      <S.Header>
        <S.Title>청년문화예술패스</S.Title>
        <S.Explain>
          청년들의 문화소비를 확대할 수 있도록 지원하는 사업
        </S.Explain>
      </S.Header>
      <S.Line></S.Line>
      <S.Contents>
        <S.Content>
          <S.Category>지원 내용</S.Category>
          <S.Data>
            최대 15만원 지원(국비 10만원 + 지방비 5만원 매칭 지원)
          </S.Data>
        </S.Content>
        <S.Content>
          <S.Category>지원 규모</S.Category>
          <S.Data>전국 16만명</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>사업운영기간</S.Category>
          <S.Data>(-)</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>사업신청기간</S.Category>
          <S.Data>
            2024년 03월 28일
            <br />~ 2024년 11월 30일
          </S.Data>
        </S.Content>
        <S.Content>
          <S.Category>연령 정보</S.Category>
          <S.Data>만 19세 ~ 19세</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>전공 요건</S.Category>
          <S.Data>제한 없음</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>취업 상태</S.Category>
          <S.Data>제한 없음</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>특화분야</S.Category>
          <S.Data>제한 없음</S.Data>
        </S.Content>
        <S.Content>
          <S.Category>
            거주지 /<br /> 소득 조건
          </S.Category>
          <S.Data>국내 거주하는 2005년생 누구나</S.Data>
        </S.Content>
      </S.Contents>
      <S.Line2></S.Line2>
      {isClicked ? (
        <S.BookmarkFillIcon onClick={handleBookmarkClick} />
      ) : (
        <S.BookmarkIcon onClick={handleBookmarkClick} />
      )}
    </S.Container>
  );
}

export default PolicyDetails;
