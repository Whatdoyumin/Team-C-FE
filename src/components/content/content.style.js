import styled from 'styled-components';
import { RiArrowRightWideLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Container = styled(Link)`
  display: flex;
  width: 319px;
  height: 40px;
  gap: 10px;
  align-items: center;
  text-decoration: none;
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: ${(props) =>
    props.isChecked ? 'none' : '1px dotted rgba(0, 0, 0, 0.3)'};
  background-color: ${(props) => (props.isChecked ? '#588BE2' : 'white')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Policy = styled.div`
  display: flex;
  background-color: white;
  width: 277px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 231px;
  font-weight: semi-bold;
  color: #61646b;
`;

const StyledIcon = styled(RiArrowRightWideLine)`
  font-size: 20px;
  margin-right: 10px;
`;

const CheckImg = styled(FaCheck)`
  color: white;
  z-index: 1;
  position: absolute;
`;

export { Container, Button, Policy, Title, StyledIcon, CheckImg };
