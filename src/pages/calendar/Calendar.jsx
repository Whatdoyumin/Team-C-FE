import { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
} from 'date-fns';
import * as S from './calendar.style';
import CalendarHeader from '../../components/calendarHeader/calendarHeader';
import Day from '../../components/day/day';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectDate, setSelectDate] = useState(format(today, 'yyyy-MM-dd'));
  console.log(selectDate);
  const handleSelectDate = (data) => {
    setSelectDate(data);
  };

  const getMonthDates = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    return { monthStart, monthEnd, startDate, endDate };
  };

  const { monthStart, monthEnd, startDate, endDate } = getMonthDates();

  const generateCalendarDays = () => {
    const days = [];
    let day = startDate;
    const started = true; // 수정 예정
    while (day <= endDate) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = day >= monthStart && day <= monthEnd;
        const editDay = format(day, 'yyyy-MM-dd');
        const isSelectedDay = editDay === selectDate;
        week.push(
          <S.Day
            key={editDay}
            selected={isSelectedDay}
            onClick={isCurrentMonth ? () => handleSelectDate(editDay) : null}
            style={{
              backgroundColor: isCurrentMonth ? null : 'var(--color-gray-50)',
            }}
          >
            {isCurrentMonth ? (
              <>
                <S.DaySpan selected={isSelectedDay}>
                  {format(day, 'd')}
                </S.DaySpan>
                <S.DayPolicyList>
                  {/* 아마 key 값으로 하겠죠? */}
                  {editDay === '2024-10-19' ? (
                    <>
                      {/* 여기서 map 돌릴듯? 따로 컴포넌트 뺄 수도 있을 것 같아여... */}
                      <S.DayPolicy>
                        {started ? (
                          <S.ArrowForwardIcon selected={isSelectedDay} />
                        ) : (
                          <S.ArrowBackIcon selected={isSelectedDay} />
                        )}
                        <S.DayPolicyText
                          $started={started}
                          selected={isSelectedDay}
                        >
                          청년정책1글이길어져볼게얍
                        </S.DayPolicyText>
                      </S.DayPolicy>
                      <S.DayPolicy>
                        {started ? (
                          <S.ArrowForwardIcon selected={isSelectedDay} />
                        ) : (
                          <S.ArrowBackIcon selected={isSelectedDay} />
                        )}
                        <S.DayPolicyText
                          $started={started}
                          selected={isSelectedDay}
                        >
                          청년정책2글이길어져볼게얍
                        </S.DayPolicyText>
                      </S.DayPolicy>
                    </>
                  ) : null}
                </S.DayPolicyList>
              </>
            ) : null}
          </S.Day>
        );

        day = addDays(day, 1);
      }

      days.push(<S.DayBox key={day.toDateString()}>{week}</S.DayBox>);
    }

    return days;
  };

  const prevMonth = () => {
    const newDate = subMonths(currentDate, 1);
    setCurrentDate(newDate);
    setSelectDate(format(startOfMonth(newDate), 'yyyy-MM-dd'));
  };

  const nextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    setCurrentDate(newDate);
    setSelectDate(format(startOfMonth(newDate), 'yyyy-MM-dd'));
  };

  return (
    <S.Layout>
      <CalendarHeader
        currentDate={currentDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <S.CalendarBox>
        <S.WeekLayout>
          {weekDays.map((day, index) => (
            <S.Week key={index}>{day}</S.Week>
          ))}
        </S.WeekLayout>
        <S.DayLayout>{generateCalendarDays()}</S.DayLayout>
      </S.CalendarBox>
      {selectDate && <Day day={selectDate} />}
    </S.Layout>
  );
};

export default Calendar;
