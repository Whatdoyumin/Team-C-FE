import { useNavigate } from 'react-router-dom';
import * as S from './NavBar.style';
import { NAVMENU } from '../../constants/menu.jsx';

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <S.BottomNav>
      <S.NavDiv>
        {NAVMENU.map((item, _) => (
          <S.NavItem
            key={item.id}
            onClick={() => navigate(item.path)}
            selected={path === item.path ? true : false}
          >
            {item.img}
            <span>{item.name}</span>
          </S.NavItem>
        ))}
      </S.NavDiv>
    </S.BottomNav>
  );
}

export { NavBar };
