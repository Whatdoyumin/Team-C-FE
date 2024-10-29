import * as S from './day.style';
import { format } from 'date-fns';
import Content from '../content/content';

const Day = (props) => {
  const { day } = props;
  // 컨텐츠 불러와서 map 돌리고 없으면 뭐 보여주나?
  return (
    <S.Container>
      <S.Date>{format(day, 'd')}일</S.Date>
      <S.Contents>
        <Content />
        <Content />
        <Content />
        <Content />
      </S.Contents>
    </S.Container>
  );
};

export default Day;
