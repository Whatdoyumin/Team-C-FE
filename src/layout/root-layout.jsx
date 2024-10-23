import { Outlet } from 'react-router-dom';
import * as S from './root-layout.style';
import { Header } from '../components/header/Header';
import { NavBar } from '../components/navBar/NavBar';

const RootLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <NavBar />
    </S.Container>
  );
};

export default RootLayout;
