import * as S from './SettingForm.style';
import { FORM_MENU } from '../../constants/form_menu';
import { ToggleBtnGroup } from '../toggleBtnGroup/ToggleBtnGroup';
import useForm from '../../hooks/useForm';
import { validateUser } from '../../utils/validate';
import { ProfileImgUploader } from '../profileImgUploader/ProfileImgUploader';
import { InputField } from '../inputField/InputField';
import { useState } from 'react';

function SettingForm({ title }) {
  const initialValue = {
    nickName: '',
    age: '',
  };

  const {
    values,
    errors,
    touched,
    getTestInputProps,
    isFormValid,
    setToggleSelections,
    toggles,
  } = useForm({
    initialValue,
    validate: validateUser,
    formMenu: FORM_MENU,
  });


  };

  return (
    <S.Form>
      <S.FormTitle>{title}</S.FormTitle>
      <ProfileImgUploader onProfileChange={handleProfileChange} />
      <S.Section>
        <InputField
          label="닉네임"
          type="text"
          placeholder="특수문자 없이 6자 이내로 작성해주세요."
          {...getTestInputProps('nickName')}
          error={touched.nickName && errors.nickName}
        />

        <InputField
          label="나이"
          type="number"
          placeholder="만 나이 숫자만 입력해주세요."
          {...getTestInputProps('age')}
          error={touched.age && errors.age}
        />

        <ToggleBtnGroup
          formMenu={FORM_MENU}
          onToggleChange={handleToggleChange}
        />
      </S.Section>

      <S.SubmitBtn type="submit" disabled={!isFormValid}>
        회원가입 하기
      </S.SubmitBtn>
    </S.Form>
  );
}

export { SettingForm };
