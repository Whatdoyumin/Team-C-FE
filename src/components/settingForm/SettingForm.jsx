import * as S from './SettingForm.style';
import { FormSection } from '../formSection/FormSection';
import { FORM_MENU } from '../../constants/form_menu';
import { ToggleBtnGroup } from '../toggleBtnGroup/ToggleBtnGroup';
import { useState, useRef } from 'react';
import { CiImageOn } from 'react-icons/ci';

function SettingForm({ title }) {
  const [profileImg, setProfileImg] = useState(null);
  const profileImgFileInput = useRef(null);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Form>
      <S.FormTitle>{title}</S.FormTitle>
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

      <S.Section>
        <FormSection title={'닉네임'}>
          <S.Input
            type="name"
            placeholder="특수문자 없이 6자 이내로 작성해주세요."
          />
        </FormSection>

        <FormSection title={'나이'}>
          <S.Input type="age" placeholder="만 나이로 입력해주세요." />
        </FormSection>

        {FORM_MENU.map((item, _) => (
          <FormSection
            key={item.id}
            title={item.title}
            additional={item.additional}
          >
            <ToggleBtnGroup options={item.options} />
          </FormSection>
        ))}
      </S.Section>

      <S.SubmitBtn type="submit">회원가입 하기</S.SubmitBtn>
    </S.Form>
  );
}

export { SettingForm };
