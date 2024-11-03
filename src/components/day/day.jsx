import * as S from './day.style';
import { format } from 'date-fns';
import Content from '../content/content';

const Day = (props) => {
  const { day, checked, ...policies } = props;
  console.log(checked);
  const policiesArray = Object.values(policies);

  function findSameDate() {
    return policiesArray.filter(
      (policy) => policy.startDate === day || policy.endDate === day
    );
  }

  const sameDates = findSameDate();

  return (
    <S.Container>
      <S.Date>{format(day, 'd')}일</S.Date>
      <S.Contents>
        {sameDates.map((sameDatePolicy) => {
          const isChecked = checked.includes(sameDatePolicy.bizId);
          return (
            <Content
              key={sameDatePolicy.bizId}
              {...sameDatePolicy}
              checked={isChecked}
            />
          );
        })}
      </S.Contents>
    </S.Container>
  );
};

export default Day;
