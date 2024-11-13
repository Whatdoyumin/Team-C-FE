import * as S from './PolicyRecommend.style';
import PolicyList from '../../components/policyList/policyList';
import { useState } from 'react';
import userInfo from '../../mocks/userData.json';
const user = userInfo[0];
console.log(user);
function PolicyRec() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.Container>
      <S.PolicyContainer>
        {isLogin ? (
          <PolicyList isLogin={isLogin} {...user}></PolicyList>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            로그인이 필요한 서비스 입니다
          </div>
        )}
      </S.PolicyContainer>
    </S.Container>
  );
}

export default PolicyRec;
