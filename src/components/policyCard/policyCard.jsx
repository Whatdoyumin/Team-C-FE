import * as S from './policyCard.style';

const Policy = () => {
  return (
    <S.Container>
      <S.Texts>
        <S.Title>청년문화예술패스</S.Title>
        <S.Content>
          청년들의 문화소비를 확대할 수 있도록 지원하는 사업
        </S.Content>
      </S.Texts>
      <S.Img>
        <img src="src/components/policyCard/rb_60312.png"></img>
      </S.Img>
    </S.Container>
  );
};

export default Policy;
