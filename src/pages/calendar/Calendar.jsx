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
} from 'date-fns';
import * as S from './Calendar.style';
import CalendarHeader from '../../components/calendarHeader/calendarHeader';
import Day from '../../components/day/day';
import policyDatas from '../../moks/policyData.json';
import userInfo from '../../moks/userData.json';

const user = userInfo[0];
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

function getBookmarkPolicyId() {
  return user.bookmarked;
}
function getPolicyInfo(policies) {
  return policies.flatMap((id) =>
    policyDatas.filter((policy) => policy.bizId === id)
  );
}
const Calendar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectDate, setSelectDate] = useState(format(today, 'yyyy-MM-dd'));

  const handleSelectDate = (data) => {
    setSelectDate(data);
  };

  const policies = isLogin ? getPolicyInfo(getBookmarkPolicyId()) : [];
  // console.log(policies);
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
                  {policies.map((policy) =>
                    policy.startDate === editDay ? (
                      <S.DayPolicy key={`${policy.bizId}_start`}>
                        <S.ArrowForwardIcon selected={isSelectedDay} />
                        <S.DayPolicyText
                          $started={true}
                          selected={isSelectedDay}
                        >
                          {policy.policyTitle}
                        </S.DayPolicyText>
                      </S.DayPolicy>
                    ) : policy.endDate === editDay ? (
                      <S.DayPolicy key={`${policy.bizId}_end`}>
                        <S.ArrowBackIcon selected={isSelectedDay} />
                        <S.DayPolicyText
                          $started={false}
                          selected={isSelectedDay}
                        >
                          {policy.policyTitle}
                        </S.DayPolicyText>
                      </S.DayPolicy>
                    ) : null
                  )}
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
      {isLogin ? (
        <>
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
          {selectDate && <Day day={selectDate} {...policies} {...user} />}
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          로그인이 필요한 서비스입니다
        </div>
      )}
    </S.Layout>
  );
};

export default Calendar;
