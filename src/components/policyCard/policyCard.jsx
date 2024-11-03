import * as S from './policyCard.style';
import { useState, useEffect } from 'react';
import img1 from '../../images/policyImg1.svg';
import img2 from '../../images/policyImg2.svg';
import img3 from '../../images/policyImg3.svg';
import img4 from '../../images/policyImg4.svg';
import { format } from 'date-fns';

const PolicyCard = (props) => {
  const { bizId, endDate, policyTitle, startDate, isLogin, user } = props;

  const bookmarkList = isLogin ? user.bookmarked : [];

  const bookmarkCheck = (bizId) => {
    return bookmarkList.includes(bizId);
  };

  const [isClicked, setIsClicked] = useState(bookmarkCheck(bizId));

  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };

  const ImagesArr = [img1, img2, img3, img4];
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const storedIndex = localStorage.getItem(`randomImageIndex_${bizId}`);
    if (storedIndex) {
      setRandomIndex(parseInt(storedIndex, 10));
    } else {
      const newIndex = Math.floor(Math.random() * ImagesArr.length);
      setRandomIndex(newIndex);
      localStorage.setItem(`randomImageIndex_${bizId}`, newIndex);
    }
  }, [bizId]);

  const RandomImage = randomIndex !== null ? ImagesArr[randomIndex] : null;

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'yyyy년 M월 d일');
  };

  return (
    <S.Container>
      <S.Card to={`/policy/${bizId}`}>
        <S.Texts>
          <S.Title>{policyTitle}</S.Title>
          <S.Content>
            {formatDate(startDate)} <br />~ {formatDate(endDate)}
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
