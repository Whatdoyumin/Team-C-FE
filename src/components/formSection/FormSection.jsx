import * as S from './FormSection.style';

const FormSection = ({ title, isOptional, children }) => {
  return (
    <S.Section>
      <S.SectionTitle>
        <S.Title>{title}</S.Title>
        <S.Asterisk>{isOptional ? null : '*'}</S.Asterisk>
      </S.SectionTitle>
      {children}
    </S.Section>
  );
};

export { FormSection };
