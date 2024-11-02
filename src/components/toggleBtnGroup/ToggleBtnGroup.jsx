import * as S from './ToggleBtnGroup.style';
import { useState } from 'react';

function ToggleBtnGroup({ options }) {
  const [toggles, setToggles] = useState(Array(options.length).fill(false));

  const handleToggle = (idx) => {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[idx] = !newToggles[idx];

      return newToggles;
    });
  };

  return (
    <S.Ul>
      {options.map((option, idx) => (
        <S.Li key={idx}>
          <S.ToggleBtn
            type="button"
            onClick={() => handleToggle(idx)}
            $isSelected={toggles[idx]}
            value={option}
          />
        </S.Li>
      ))}
    </S.Ul>
  );
}

export { ToggleBtnGroup };
