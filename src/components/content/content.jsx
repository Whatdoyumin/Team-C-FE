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
      <S.Policy to="/policy/1">
        <S.Title>청년문화예술패스</S.Title>
        <S.StyledIcon />
      </S.Policy>
    </S.Container>
  );
};

export default Content;
