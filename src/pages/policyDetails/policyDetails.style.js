import styled from 'styled-components';
import { BsBookmarkDash, BsBookmarkFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 190px);
  overflow-y: scroll;
`;

const PolicyInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(
    to top left,
    rgba(244, 244, 244, 0.1) -10%,
    rgba(116, 215, 216, 0.1) 11%,
    rgba(88, 139, 226, 0.1) 100%
  );
  width: 100%;
`;

const BookmarkIcon = styled(BsBookmarkDash)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  width: 40px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 25px;
  height: 25px;
`;
const BookmarkFillIcon = styled(BsBookmarkFill)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  width: 40px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-blue-700);
  width: 25px;
  height: 25px;
`;
const Header = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  display: flex;
  font-size: 26px;
  color: var(--color-blue-700);
  font-weight: bold;
`;

const Explain = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  border-top: 1px solid var(--color-gray-300);
  width: 90%;
  display: flex;
  align-self: center;
`;
const Line2 = styled.div`
  border-right: 1px solid var(--color-gray-300);
  height: 550px;
  display: flex;
  z-index: 1;
  position: absolute;
  top: 98px;
  left: 105px;
`;
const Content = styled.div`
  display: flex;
  margin: 10px 20px;
  justify-content: space-between;
`;
const Category = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  width: 81px;
`;
const Data = styled.div`
  display: flex;
  width: 217px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;
export {
  Container,
  Header,
  Title,
  Explain,
  Contents,
  Line,
  Category,
  Content,
  Data,
  BookmarkFillIcon,
  BookmarkIcon,
  Line2,
  PolicyInfoCard,
};
