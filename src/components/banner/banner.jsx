import * as S from './banner.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/주택청약.svg';
import img2 from '../../images/청년도약계좌.svg';
import img3 from '../../images/분위.svg';
import img4 from '../../images/국장.svg';
import img5 from '../../images/내일배움카드.svg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <S.StyledSlider {...settings}>
      <S.Banner>
        <S.Texts>
          <S.Title>주택청약</S.Title>
          <S.Content>
            청약통장에 가입한 사람에 한하여 아파트 분양 시 당첨자를 선정
          </S.Content>
        </S.Texts>
        <S.Img src={img1} alt="주택청약" />
      </S.Banner>
      <S.Banner>
        <S.Texts>
          <S.Title>청년도약계좌</S.Title>
          <S.Content>
            월 70만원을 5년 납입하면 약 5,000만 원을 드려요!
          </S.Content>
        </S.Texts>
        <S.Img src={img2} alt="청년도약계좌" />
      </S.Banner>
      <S.Banner>
        <S.Texts>
          <S.Title>N분위란?</S.Title>
          <S.Content>
            소득이나 비율을 기준으로 전체를 나누어 분류하는 방법
          </S.Content>
        </S.Texts>
        <S.Img src={img3} alt="N분위란" />
      </S.Banner>
      <S.Banner>
        <S.Texts>
          <S.Title>국가장학금</S.Title>
          <S.Content>
            등록금 부담을 줄이기 위해 소득 수준에 따라 차등 지원
          </S.Content>
        </S.Texts>
        <S.Img src={img4} alt="국가장학금" />
      </S.Banner>
      <S.Banner>
        <S.Texts>
          <S.Title>내일배움카드</S.Title>
          <S.Content>
            직업 능력을 향상시키기 위해 국가에서 훈련비를 지원하는 제도
          </S.Content>
        </S.Texts>
        <S.Img src={img5} alt="내일배움카드" />
      </S.Banner>
    </S.StyledSlider>
  );
};

export default Banner;
