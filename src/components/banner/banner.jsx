import * as S from './banner.style';

const Banner = () => {
  return (
    <S.Container>
      <S.Texts>
        <S.Title>주택청약</S.Title>
        <S.Content>
          청약통장에 가입한 사람에 한하여 아파트 분양 시 당첨자를 선정
        </S.Content>
      </S.Texts>
      <S.Img src="src/components/banner/img.png"></S.Img>
    </S.Container>
  );
};

export default Banner;
