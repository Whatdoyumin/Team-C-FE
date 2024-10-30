import * as S from './ToggleBtnGroup.style';
import { useState } from 'react';

function ToggleBtnGroup({ options }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOption = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <S.Container>
      {options.map((option, idx) => (
        <S.ToggleBtn
          key={idx}
          onClick={handleClickOption}
          isSelected={isClicked}
        >
          {option}
        </S.ToggleBtn>
      ))}
    </S.Container>
  );
}

export { ToggleBtnGroup };
