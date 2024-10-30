import * as S from './Header.style';
import { IoChevronBack } from 'react-icons/io5';

function Header() {
  return (
    <S.Header>
      <S.Nav>
        <IoChevronBack />
        <S.Logo to="/home">청년돋움</S.Logo>
        <S.Profile></S.Profile>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
