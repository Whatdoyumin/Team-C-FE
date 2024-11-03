import { useState } from 'react';
import * as S from './content.style';
const Content = (props) => {
  const { bizId, policyTitle, checked } = props;
  const [isCheck, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isCheck);
  };

  return (
    <S.Container>
      <S.Button onClick={handleClick} checked={isCheck}>
        {isCheck && <S.CheckImg />}
      </S.Button>
      <S.Policy to={`/policy/${bizId}`}>
        <S.Title>{policyTitle}</S.Title>
        <S.StyledIcon />
      </S.Policy>
    </S.Container>
  );
};

export default Content;
