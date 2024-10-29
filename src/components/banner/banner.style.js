import styled from 'styled-components';
import Slider from 'react-slick';

const StyledSlider = styled(Slider)`
  width: 345px;
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: 5px;
    display: flex;
    justify-content: center;
  }

  .slick-dots ul {
    display: flex;
    width: 100%;
  }

  .slick-dots li {
    width: 5px;
  }

  .slick-dots li button:before {
    opacity: 1;
    color: #ffffff;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #e28958;
  }
`;

const Banner = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 345px;
  min-height: 150px;
  border-radius: 20px;
  background-color: #53565d;
  background-image: radial-gradient(
    circle at top right,
    rgba(226, 161, 88, 0.1),
    rgba(226, 88, 88, 0.1),
    rgba(149, 181, 237, 0.1),
    rgba(83, 86, 93, 1)
  );
  background-size: cover;
`;
const Texts = styled.div`
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 정렬 유지 */
  width: 60%; /* 폭을 조정하여 비율을 맞춤 */
  justify-content: center; /* 수직 중앙 정렬 */
  margin-left: 20px; /* 여백 설정 */
  gap: 10px; /* 요소 간 간격 설정 */
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 15px;
  color: #ffffff;
  word-break: keep-all;
  font-weight: 600;
  line-height: 135%;
`;

const Img = styled.img`
  width: 120px;
  object-fit: cover;
  margin-right: 10px;
`;

export { Texts, Title, Content, Img, Banner, StyledSlider };
