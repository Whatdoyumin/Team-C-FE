import { useState } from 'react';
import * as S from './content.style';
const Content = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.Container>
      <S.Button onClick={handleClick} isChecked={isChecked}>
        {isChecked && <S.CheckImg />}
      </S.Button>
      <S.Policy>
        <S.Title>글이 길면 어떻게 될까요 과연 두구두구</S.Title>
        <S.StyledIcon />
      </S.Policy>
    </S.Container>
  );
};

export default Content;
