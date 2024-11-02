const EDUCATION = ['고등학교 졸업 이하', '대학교 재학', '대학교 졸업'];

const FIELD = ['IT', '공학', '자연', '경상', '인문', '예체능'];

const REGION = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '세종',
  '제주',
];

const INTERESTS = ['일자리', '주거', '교육', '복지 / 문화', '참여 / 권리'];

const FORM_MENU = [
  {
    id: 1,
    title: '학력',
    options: EDUCATION,
    additional: null,
  },
  {
    id: 2,
    title: '분야',
    options: FIELD,
    additional: null,
  },
  {
    id: 3,
    title: '지역',
    options: REGION,
    additional: null,
  },
  {
    id: 4,
    title: '관심있는 키워드',
    options: INTERESTS,
    additional: '(중복 선택 가능)',
  },
];

export { FORM_MENU };
