import { useState } from 'react';
import * as S from './policyDetails.style';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { getSinglePolicy } from '../../apis/policy';
import { useQuery } from '@tanstack/react-query';
const prdRpttSecdMap = {
  '002001': '상시',
  '002002': '연간반복',
  '002004': '월간반복',
  '002005': '미정',
};

function PolicyDetails() {
  const params = useParams();
  // const [isClicked, setIsClicked] = useState(policy?.isChecked);
  const { data, error, isLoading } = useQuery({
    queryKey: [params],
    queryFn: () => getSinglePolicy(params.policyId),
  });

  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return <div>로딩중입니다</div>;
  }
  const policyData = data?.data.emp;

  if (!policyData) {
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

  const handleBookmarkClick = () => {
    setIsClicked(!isClicked);
  };

  function getRpttDescription(prdRpttSecd) {
    return prdRpttSecdMap[prdRpttSecd] || '-';
  }

  const policyFieldCodes = {
    '023010': '일자리',
    '023020': '주거',
    '023030': '교육',
    '023040': '복지 / 문화',
    '023050': '참여 / 권리',
  };

  function getpolyRlmCd(polyRlmCd) {
    return policyFieldCodes[polyRlmCd];
  }

  return (
    <S.Container>
      <S.PolicyInfoCard>
        <S.Header>
          <S.Title>{policyData?.polyBizSjnm}</S.Title>
          <S.Explain>{policyData?.polyItcnCn}</S.Explain>
        </S.Header>
        <S.Contents>
          <S.Content>
            <S.Category>사업신청기간</S.Category>
            <S.Data>{policyData?.rqutPrdCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>지원 내용</S.Category>
            <S.Data>{policyData?.sporCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>지원 규모</S.Category>
            <S.Data>{policyData?.sporScvl}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>제출 서류 내용</S.Category>
            <S.Data>{policyData?.pstnPaprCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>사업운영기간</S.Category>
            <S.Data>{policyData?.bizPrdCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>사업 신청 기간 주기</S.Category>
            <S.Data>{getRpttDescription(policyData?.prdRpttSecd)}</S.Data>
          </S.Content>

          <S.Content>
            <S.Category>참여제한대상내용</S.Category>
            <S.Data>{policyData?.prcpLmttTrgtCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>연령 정보</S.Category>
            <S.Data>{policyData?.ageInfo}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>전공 요건</S.Category>
            <S.Data>{policyData?.majrRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>학력 요건</S.Category>
            <S.Data>{policyData?.accrRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>취업 상태</S.Category>
            <S.Data>{policyData?.empmSttsCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>특화분야</S.Category>
            <S.Data>{policyData?.splzRlmRqisCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>
              거주지 /<br /> 소득 조건
            </S.Category>
            <S.Data>{policyData?.prcpCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>운영기관명</S.Category>
            <S.Data>{policyData?.cnsgNmor}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>신청방법</S.Category>
            <S.Data>{policyData?.rqutProcCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>운영 기관 담당자 연락처</S.Category>
            <S.Data>{policyData?.tintCherCtpcCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>주관 부처 담당자 연락처</S.Category>
            <S.Data>{policyData?.cherCtpcCn}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>기타사항</S.Category>
            <S.Data>{policyData?.etct}</S.Data>
          </S.Content>
          <S.Content>
            <S.Category>참고 사이트1</S.Category>
            <S.Data>
              {policyData?.rfcSiteUrla1 &&
              policyData?.rfcSiteUrla1 !== '-' &&
              policyData?.rfcSiteUrla1 !== 'null' ? (
                <a href={policyData?.rfcSiteUrla1}>
                  {policyData?.rfcSiteUrla1}
                </a>
              ) : (
                '-'
              )}
            </S.Data>
          </S.Content>
          <S.Content>
            <S.Category>참고 사이트2</S.Category>
            <S.Data>
              {policyData?.rfcSiteUrla2 &&
              policyData?.rfcSiteUrla2 !== '-' &&
              policyData?.rfcSiteUrla2 !== 'null' ? (
                <a href={policyData?.rfcSiteUrla2}>
                  {policyData?.rfcSiteUrla2}
                </a>
              ) : (
                '-'
              )}
            </S.Data>
          </S.Content>
          <S.Content>
            <S.Category>정책분야</S.Category>
            <S.Data>{getpolyRlmCd(policyData?.polyRlmCd)}</S.Data>
          </S.Content>
        </S.Contents>
        {/* {isClicked ? (
          <S.BookmarkFillIcon onClick={handleBookmarkClick} />
        ) : (
          <S.BookmarkIcon onClick={handleBookmarkClick} />
        )} */}
      </S.PolicyInfoCard>
    </S.Container>
  );
}

export default PolicyDetails;
