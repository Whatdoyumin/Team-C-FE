import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';

const PolicyList = ({ isLogin }) => {
  return (
    <S.Container>
      {isLogin ? (
        <S.Title>✨ OO님을 위한 추천정책</S.Title>
      ) : (
        <S.Title>🚨 마감이 임박한 정책</S.Title>
      )}
      <S.PolicyList>
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
      </S.PolicyList>
    </S.Container>
  );
};

export default PolicyList;
