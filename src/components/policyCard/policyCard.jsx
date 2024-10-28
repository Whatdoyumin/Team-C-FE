import * as S from './policyCard.style';
import { useState } from 'react';

const PolicyCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Container>
      <S.Card to="/policy/1">
        <S.Texts>
          <S.Title>청년문화예술패스</S.Title>
          <S.Content>
            2024년 10월 20일 <br />~ 2024년 11월 25일
          </S.Content>
        </S.Texts>
        <S.Img>
          <img src="src/components/policyCard/rb_60312.png"></img>
        </S.Img>
      </S.Card>

      {isClicked ? (
        <S.BookmarkFillIcon onClick={handleBookmarkClick} />
      ) : (
        <S.BookmarkIcon onClick={handleBookmarkClick} />
      )}
    </S.Container>
  );
};

export default PolicyCard;
