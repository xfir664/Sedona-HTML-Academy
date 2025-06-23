import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

const NavListContainer = styled.div`
  max-width: 400px;
  margin-right: auto;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default function MainNavList() {
  const NAV_LINKS: NavLink[] = [
    {
      path: "/Sedona-HTML-Academy/",
      name: "Главная",
    },
    {
      path: "catalog",
      name: "Каталог",
    },
    {
      path: "about",
      name: "О нас",
    },
  ];

  return (
    <NavListContainer>
      <NavList className="list m-0">
        {NAV_LINKS.map((el) => {
          return (
            <li key={el.path}>
              <MyBtnLink
                className="navlink navlink--base"
                UIType="navlink"
                href={el.path}
                isEnd={el.path === "" ? true : false}
              >
                {el.name}
              </MyBtnLink>
            </li>
          );
        })}
      </NavList>
    </NavListContainer>
  );
}
