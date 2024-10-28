import * as S from './home.style';
import PolicyList from '../../components/policyList/policyList';
import { useState } from 'react';
import Banner from '../../components/banner/banner';
const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <S.Container>
      <Banner></Banner>
      <S.PolicyContainer>
        {isLogin ? (
          <S.Title>✨ OO님을 위한 추천정책</S.Title>
        ) : (
          <S.Title>🚨 마감이 임박한 정책</S.Title>
        )}
        <PolicyList></PolicyList>
      </S.PolicyContainer>
    </S.Container>
  );
};

export default Home;
