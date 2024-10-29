import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Layout = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 190px);
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarBox = styled.div`
  background-color: #f3f3f3;
  width: 345px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-radius: 13px;
`;

const WeekLayout = styled.div`
  margin-top: 9px;
  display: flex;
  width: 320px;
  height: 22px;
  gap: 9px;
  justify-content: center;
`;

const Week = styled.div`
  width: 38px;
  height: 22px;
  color: black;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background-color: white;
  align-items: center;
  font-size: 13px;
`;

const DayLayout = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;

const Day = styled.div`
  width: 38px;
  height: 51px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.selected ? '#b7b7b7' : 'white'}; // selected 상태에 따라 배경색 변경
  align-items: center;
  border: none;
  border-radius: 5px;
  font-size: 11px;
`;

const DaySpan = styled.span`
  position: relative;
  font-weight: 700;
  margin-top: 2px;
  color: ${(props) =>
    props.selected ? 'white' : 'black'}; // selected 상태에 따라 글자색 변경
`;

const DayPolicy = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const DayPolicyList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;

const DayPolicyText = styled.div`
  font-size: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.isStart ? '#426ACC' : '#F05353')};
`;

const ArrowBackIcon = styled(IoIosArrowBack)`
  width: 25px;
  color: #f05353;
`;

const ArrowForwardIcon = styled(IoIosArrowForward)`
  width: 25px;
  color: #426acc; /* 작은따옴표 제거 */
`;
export {
  Layout,
  Title,
  Button,
  CalendarBox,
  WeekLayout,
  Week,
  DayLayout,
  DayBox,
  Day,
  DaySpan,
  DayPolicy,
  DayPolicyList,
  DayPolicyText,
  ArrowForwardIcon,
  ArrowBackIcon,
};
