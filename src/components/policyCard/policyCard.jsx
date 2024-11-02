import * as S from './policyCard.style';
import { useState, useEffect } from 'react';
import img1 from '../../images/policyImg1.svg';
import img2 from '../../images/policyImg2.svg';
import img3 from '../../images/policyImg3.svg';
import img4 from '../../images/policyImg4.svg';

const PolicyCard = ({ cardId }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };

  const ImagesArr = [img1, img2, img3, img4];
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const storedIndex = localStorage.getItem(`randomImageIndex_${cardId}`);
    if (storedIndex) {
      setRandomIndex(parseInt(storedIndex, 10));
    } else {
      const newIndex = Math.floor(Math.random() * ImagesArr.length);
      setRandomIndex(newIndex);
      localStorage.setItem(`randomImageIndex_${cardId}`, newIndex);
    }
  }, [cardId]);

  const RandomImage = randomIndex !== null ? ImagesArr[randomIndex] : null;

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
          {RandomImage && <img src={RandomImage} alt="랜덤 이미지" />}
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
