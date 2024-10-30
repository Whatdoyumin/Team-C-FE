import * as S from './SettingForm.style';
import { FormSection } from '../formSection/FormSection';
import { FORM_MENU } from '../../constants/form_menu';
import { ToggleBtnGroup } from '../toggleBtnGroup/ToggleBtnGroup';

function SettingForm({ title }) {
  return (
    <S.Form>
      <S.FormTitle>{title}</S.FormTitle>
      <S.ProfileImg></S.ProfileImg>
      <S.Section>
        <FormSection title={'닉네임'}>
          <S.Input
            type="text"
            placeholder="특수문자 없이 6자 이내로 작성해주세요."
          />
        </FormSection>
        <FormSection title={'나이'}>
          <S.Input type="text" placeholder="만 나이로 입력해주세요." />
        </FormSection>
        {FORM_MENU.map((item, _) => (
          <FormSection key={item.id} title={item.title}>
            <ToggleBtnGroup options={item.options} />
          </FormSection>
        ))}
      </S.Section>
    </S.Form>
  );
}

export { SettingForm };
