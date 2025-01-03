import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';

import { useInView } from 'react-intersection-observer';
import { useContext, useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getRecommendPolicy } from '../../apis/policy';
import PolicyListSkeleton from './policyListSkeleton/policyListSkeleton';
import { LoginContext } from '../../context/LoginContext';
import Alert from '../alert/alert';

function useGetInfinitePolicy() {
  const { isLogin } = useContext(LoginContext);
  return useInfiniteQuery({
    queryKey: ['categoryPolicies'],
    queryFn: ({ pageParam = 1 }) => getRecommendPolicy(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentIndex = lastPage?.data?.pageIndex || 1;
      const totalPolicies = lastPage?.data?.totalCnt || 0;
      const policiesPerPage = 10;
      const maxPageIndex = Math.ceil(totalPolicies / policiesPerPage);
      return currentIndex < maxPageIndex ? currentIndex + 1 : undefined;
    },
    cacheTime: 10000,
    staleTime: 10000,
    enabled: !!isLogin,
  });
}

const PolicyListLogin = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
  } = useGetInfinitePolicy();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [isUpload, setIsUpload] = useState(false);
  const [uploadResponse, setUploadResponse] = useState('');
  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending || isLoading) {
    return <PolicyListSkeleton />;
  }

  if (error)
    return (
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        정책을 불러오는 데에 실패하였습니다.
      </p>
    );

  const policiesData = data?.pages;

  return (
    <>
      <S.Container>
        <S.PolicyList>
          {policiesData?.map((page) =>
            page?.data?.emp.map((policyData) => (
              <PolicyCard
                key={policyData.bizId}
                setIsUpload={setIsUpload}
                setUploadResponse={setUploadResponse}
                {...policyData}
              />
            ))
          )}
          {isUpload && <Alert content={uploadResponse}></Alert>}
        </S.PolicyList>
        <S.Ref ref={ref}></S.Ref>
      </S.Container>
      {isFetching && <PolicyListSkeleton />}
    </>
  );
};

export default PolicyListLogin;
