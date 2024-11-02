import * as S from './FormSection.style';

const FormSection = ({ title, isOptional, additional, children }) => {
  return (
    <S.Section>
      <S.SectionTitle>
        <S.Title>{title}</S.Title>
        {!isOptional && <S.Asterisk>*</S.Asterisk>}
        {additional && <S.Additional>{additional}</S.Additional>}
      </S.SectionTitle>
      {children}
    </S.Section>
  );
};

export { FormSection };
