import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';

const PolicyList = () => {
  return (
    <S.Container>
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
