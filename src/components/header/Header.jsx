import * as S from './Header.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { LuUserCircle2 } from 'react-icons/lu';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userImg, setUserImg] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    const user_img = localStorage.getItem('user_img');

    if (token && user_img) {
      setUserImg(user_img);
    }
  }, []);

  const showBackBtn = () => {
    const backBtnPath = [
      '/my',
      '/policy/:policyId',
      '/community',
      '/calendar',
      '/recommend',
    ];

    return backBtnPath.some((path) => {
      return location.pathname.startsWith(path.replace(':policyId', ''));
    });
  };

  const showLogoAndProfile = () => {
    return location.pathname === '/home';
  };

  return (
    <S.Header>
      <S.Nav>
        {showBackBtn() && <IoChevronBack onClick={() => navigate(-1)} />}
        {showLogoAndProfile() && <S.Logo to="/home">청년돋움</S.Logo>}
        <S.Profile onClick={() => navigate('/my')}>
          {userImg ? (
            <S.UserImg src={userImg} alt="사용자 프로필" />
          ) : (
            <LuUserCircle2 />
          )}
        </S.Profile>
      </S.Nav>
    </S.Header>
  );
}

export { Header };
