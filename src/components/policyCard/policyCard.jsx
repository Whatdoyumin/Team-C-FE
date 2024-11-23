import * as S from './policyCard.style';
import { useState, useEffect } from 'react';
import img1 from '../../images/policyImg1.svg';
import img2 from '../../images/policyImg2.svg';
import img3 from '../../images/policyImg3.svg';
import img4 from '../../images/policyImg4.svg';
import { format } from 'date-fns';

const PolicyCard = (props) => {
  const { bizId, polyBizSjnm, rqutPrdCn } = props;
  const isLogin = false;
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

  const formatDateRange = (dateRange) => {
    try {
      const [start, end] = dateRange.split('~', 2).map((date) => date.trim());
      return (
        <>
          {format(new Date(start), 'yyyy년 M월 d일')}
          <br />~ {format(new Date(end), 'yyyy년 M월 d일')}
        </>
      );
    } catch (error) {
      return dateRange;
    }
  };

  function extractSubstring(text) {
    if (!text) return '-';
    const keyword = '신청기간:';
    const keywordIndex = text.indexOf(keyword);

    if (keywordIndex !== -1) {
      const newText = text.slice(keywordIndex + 5);

      return newText;
    } else {
      const newText = text.slice(0, 21);

      return formatDateRange(newText);
    }
  }
  const editDate = extractSubstring(rqutPrdCn);

  return (
    <S.Container>
      <S.Card to={`/policy/${bizId}`}>
        <S.Texts>
          <S.Title>{polyBizSjnm}</S.Title>
          <S.Content>{editDate}</S.Content>
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
