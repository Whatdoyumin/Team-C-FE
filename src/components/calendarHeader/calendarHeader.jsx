import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { format } from 'date-fns';
import * as S from './calendarHeader.style';
const CalendarHeader = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <S.Header>
      <S.Button onClick={prevMonth}>
        <IoIosArrowDown size={24} color="#61646B" />
      </S.Button>
      <S.Title>
        {format(currentDate, 'yyyy')}년 {format(currentDate, 'M')}월
      </S.Title>
      <S.Button onClick={nextMonth}>
        <IoIosArrowUp size={24} color="#61646B" />
      </S.Button>
    </S.Header>
  );
};

export default CalendarHeader;