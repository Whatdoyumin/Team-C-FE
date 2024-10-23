import { GrHomeRounded } from 'react-icons/gr';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { PiChatCircleDots } from 'react-icons/pi';
import { LuCalendarDays } from 'react-icons/lu';
import { IoPersonOutline } from 'react-icons/io5';

const NAVMENU = [
  {
    id: 1,
    name: '홈',
    img: <GrHomeRounded />,
    path: '/home',
  },
  {
    id: 2,
    name: '맞춤 추천',
    img: <HiMiniMagnifyingGlass />,
    path: '/recommend',
  },
  {
    id: 3,
    name: '커뮤니티',
    img: <PiChatCircleDots />,
    path: '/community',
  },
  {
    id: 4,
    name: '캘린더',
    img: <LuCalendarDays />,
    path: '/calendar',
  },
  {
    id: 5,
    name: 'MY',
    img: <IoPersonOutline />,
    path: '/my',
  },
];

export { NAVMENU };
