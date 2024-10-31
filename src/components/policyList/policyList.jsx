import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';
import policyDatas from '../../moks/policyData.json';

const PolicyList = (props) => {
  const { isLogin, ...user } = props;
  const interest = user.interest;
  const safeInterest = interest || [];

  const policyFieldCodes = {
    일자리: '023010',
    주거: '023020',
    교육: '023030',
    '복지 / 문화': '023040',
    '참여 / 권리': '023050',
  };

  const convertInterestsToCodes = (interests) => {
    return interests
      .map((interest) => policyFieldCodes[interest])
      .filter((code) => code);
  };

  const interestCodes = convertInterestsToCodes(safeInterest);

  const InterestPolicy = () => {
    return policyDatas.filter((policy) =>
      interestCodes.includes(policy.polyRlmCd)
    );
  };

  const filteredPolicies = InterestPolicy();

  return (
    <S.Container>
      {isLogin ? (
        <S.PolicyList>
          {filteredPolicies.map((policyData) => (
            <PolicyCard key={policyData.bizId} {...policyData} {...user} />
          ))}
        </S.PolicyList>
      ) : (
        <S.PolicyList>
          {policyDatas.map((policyData) => (
            <PolicyCard key={policyData.bizId} {...policyData} />
          ))}
        </S.PolicyList>
      )}
    </S.Container>
  );
};

export default PolicyList;
