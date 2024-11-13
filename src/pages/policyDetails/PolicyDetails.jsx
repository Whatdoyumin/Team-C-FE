import { useState } from 'react';
import * as S from './policyDetails.style';
import policyDatas from '../../mocks/policyData.json';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

function PolicyDetails() {
  const params = useParams();

  function getPolicyByBizId(bizId) {
    return policyDatas.find((policy) => policy.bizId === Number(bizId));
  }
  const policy = getPolicyByBizId(params.policyId);
  const [isClicked, setIsClicked] = useState(policy?.isChecked);

  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };

  if (!policy) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '50px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        해당 정책을 찾을 수 없습니다.
      </div>
    );
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'yyyy년 M월 d일');
  };

  return (
    <S.Container>
      <S.PolicyInfoCard>
        <S.Header>
          <S.Title>{policy.policyTitle}</S.Title>
          <S.Explain>{policy.polyItcnCn}</S.Explain>
        </S.Header>
        <S.Line></S.Line>
        <S.Contents>
          <S.Content>
            <S.Category>지원 내용</S.Category>
            <S.Data>{policy.sporCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>지원 규모</S.Category>
            <S.Data>{policy.sporScvl}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>사업운영기간</S.Category>
            <S.Data>{policy.bizPrdCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>사업신청기간</S.Category>
            <S.Data>
              {formatDate(policy.startDate)}
              <br />~ {formatDate(policy.endDate)}
            </S.Data>
          </S.Content>
          <S.Content>
            <S.Category>연령 정보</S.Category>
            <S.Data>{policy.ageInfo}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>전공 요건</S.Category>
            <S.Data>{policy.majrRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>학력 요건</S.Category>
            <S.Data>{policy.accrRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>취업 상태</S.Category>
            <S.Data>{policy.empmSttsCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>특화분야</S.Category>
            <S.Data>{policy.splzRlmRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>
              거주지 /<br /> 소득 조건
            </S.Category>
            <S.Data>{policy.prcpCn}</S.Data>
          </S.Content>
        </S.Contents>
        <S.Line2></S.Line2>
        {isClicked ? (
          <S.BookmarkFillIcon onClick={handleBookmarkClick} />
        ) : (
          <S.BookmarkIcon onClick={handleBookmarkClick} />
        )}
      </S.PolicyInfoCard>
    </S.Container>
  );
}

export default PolicyDetails;
