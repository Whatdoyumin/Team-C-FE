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
        <PolicyList isLogin={isLogin}></PolicyList>
      </S.PolicyContainer>
    </S.Container>
  );
};

export default Home;
