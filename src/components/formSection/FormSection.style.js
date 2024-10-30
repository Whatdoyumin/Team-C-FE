import { styled } from 'styled-components';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: start;
  font-size: 12px;
`;

const Title = styled.p`
  color: var(--color-gray-500);
`;

const Asterisk = styled.p`
  color: var(--color-red-700);
`;

export { Section, SectionTitle, Title, Asterisk };
