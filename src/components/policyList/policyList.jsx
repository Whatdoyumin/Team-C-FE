import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';

const PolicyList = () => {
  return (
    <S.Container>
      <S.PolicyList>
        <PolicyCard cardId="1" />
        <PolicyCard cardId="2" />
        <PolicyCard cardId="3" />
        <PolicyCard cardId="4" />
        <PolicyCard cardId="5" />
      </S.PolicyList>
    </S.Container>
  );
};

export default PolicyList;
