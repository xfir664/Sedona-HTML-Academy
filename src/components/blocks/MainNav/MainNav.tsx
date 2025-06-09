import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MyNav = styled.nav`
  margin-right: auto;
  max-width: 400px;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li``;

const LinkWrapper = styled.div`
  position: relative;
`;

const MyNavLink = styled(NavLink)`
  display: block;
  font-weight: 700;
  padding: 20px 16px;
  transition: color ease 0.3s;

  &.active ${LinkWrapper}::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -23px;
    background-color: #756257;
  }
`;

export default function MainNav() {
  const NAV_LINKS = [
    {
      path: "/",
      name: "Главная",
    },
    {
      path: "/catalog",
      name: "Каталог",
    },
    {
      path: "/about-us",
      name: "О нас",
    },
  ];

  return (
    <MyNav>
      <NavList className="list m-0">
        {NAV_LINKS.map((el) => {
          return (
            <NavItem key={el.path}>
              <MyNavLink className="navlink navlink--base" to={el.path}>
                <LinkWrapper>{el.name}</LinkWrapper>
              </MyNavLink>
            </NavItem>
          );
        })}
      </NavList>
    </MyNav>
  );
}
