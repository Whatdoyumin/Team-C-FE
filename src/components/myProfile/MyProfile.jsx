import * as S from './MyProfile.style';
import { IoIosArrowForward } from 'react-icons/io';

const MyProfile = () => {
  const profileDataString = localStorage.getItem('profileData');
  const profileData = JSON.parse(profileDataString);
  const user_img = profileData.user_img;
  const nickName = profileData.nickName;
  const age = profileData.age;
  const education = profileData.selectedValues.학력[0];

  return (
    <S.Container>
      <h2>내 프로필</h2>
      <S.Box>
        <S.InfoContainer>
          <S.ProfileImg src={user_img} />
          <S.NickName>{nickName}</S.NickName>
          <S.AgeEducation>
            {age}세, {education}
          </S.AgeEducation>
        </S.InfoContainer>
        <S.ModifyBox>
          <S.ModifyBtn to="/my/settings">
            수정하기
            <IoIosArrowForward size="1.5rem" />
          </S.ModifyBtn>
        </S.ModifyBox>
      </S.Box>
    </S.Container>
  );
};

export { MyProfile };
