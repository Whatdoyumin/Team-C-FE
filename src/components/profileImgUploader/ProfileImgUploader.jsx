import * as S from './ProfileImgUploader.style';
import { useState, useRef } from 'react';
import { CiImageOn } from 'react-icons/ci';

function ProfileImgUploader({ onProfileChange }) {
  const [profileImg, setProfileImg] = useState(null);
  const profileImgFileInput = useRef(null);

  // 프로필 변경 함수
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImg(reader.result);
          onProfileChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <S.ProfileImg onClick={() => profileImgFileInput.current.click()}>
      {!profileImg ? (
        <CiImageOn />
      ) : (
        <img
          src={profileImg}
          alt="프로필 이미지"
          onClick={() => profileImgFileInput.current.click()}
        />
      )}
      <S.FileInput
        type="file"
        accept="image/*"
        ref={profileImgFileInput}
        onChange={handleProfileChange}
      />
    </S.ProfileImg>
  );
}

export { ProfileImgUploader };
