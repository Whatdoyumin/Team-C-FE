import * as S from './PolicyRecommend.style';
import PolicyList from '../../components/policyList/policyList';
import { useState } from 'react';

function PolicyRec() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.Container>
      <S.PolicyContainer>
        <PolicyList isLogin={isLogin}></PolicyList>
      </S.PolicyContainer>
    </S.Container>
  );
}

export default PolicyRec;
