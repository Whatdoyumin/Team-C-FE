import * as S from './Header.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { LuUserCircle2 } from 'react-icons/lu';
import logo_bg from '../../images/logo_bg.svg';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userImg, setUserImg] = useState(null);

  useEffect(() => {
    const profileDataString = localStorage.getItem('profileData');
    const profileData = JSON.parse(profileDataString);
    const user_img = profileData.user_img;

    if (profileDataString && user_img) {
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
        {showLogoAndProfile() && <S.Logo src={logo_bg} />}
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
